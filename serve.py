#!/usr/bin/env python3
from waitress import serve
from flask import Flask, send_from_directory, render_template, jsonify, \
    request, abort, session, redirect, url_for, send_file, flash
from experiment_server import ExperimentServer
import json
import os
from logger import log
import datetime
from auth import SimpleSessionAuth, Lockout
from secrets import token_urlsafe


# Generate a key for signing session cookies
SECRET_KEY = token_urlsafe()
DATA_PATH = './data/'
STUDY_PATH = './study/'
USERS = {
    'admin': {
        'password': 'default',
        'permissions': {
            'can_manage': True,
            'super_user': True,
        }
    }
}
def user_can_manage(auth):
    return auth.get('can_manage', False)

def can_edit_study(auth, exp):
    return exp.is_editable_by(auth.get('user')) or \
        auth.get('super_user', False)

def user_can_edit_study(exp):
    return (
        lambda auth: user_can_manage(auth) and can_edit_study(auth, exp)
    )

def user_can_access_study(study):
    return (
        lambda auth: user_can_manage(auth) or study in auth.get('studies', [])
    )

ALLOW_UNAUTHED_STUDY_ACCESS = False
ATTEMPTS_BEFORE_LOCKOUT = 10
LOCKOUT_DURATION = datetime.timedelta(minutes=10)


def init():
    app = Flask(__name__, static_url_path='', static_folder='js')
    app.secret_key = SECRET_KEY
    auth = SimpleSessionAuth(
        USERS,
        timeout_attempts=ATTEMPTS_BEFORE_LOCKOUT,
        timeout_duration=LOCKOUT_DURATION
    )

    def make_temp_user_for_study(study, username=None):
        username = auth.create_temporary_user(
            properties={
                'permissions': {
                    'studies': [study]
                }
            },
            name=username,
            readable_name=True,
            name_bytes=6
        )
        def remove_temp_user_fn():
            log('Removing temp user',user=username)
            auth.delete_user(username)
        return (username, remove_temp_user_fn)

    def code_generator_fn(study, code=None):
        (username, remove_fn) = make_temp_user_for_study(study, username=code)
        return {
            'code': username,
            'study': study,
            'on_remove': remove_fn
        }

    exp_server = ExperimentServer(DATA_PATH, STUDY_PATH, code_generator_fn)

    exp_server.load_experiments()
    def admin_access_allowed(study=None):
        if study is not None:
            try:
                exp = exp_server.get_experiment(study)
            except:
                return False
            return auth.is_session_authenticated(
                permission_fn=user_can_edit_study(exp)
            )
        else:
            return auth.is_session_authenticated(
                permission_fn=user_can_manage
            )
    def study_access_allowed(study):
        if not exp_server.study_available(study):
            return False
        if ALLOW_UNAUTHED_STUDY_ACCESS or \
                exp_server.get_experiment(study).get_access_type() == 'anyone':
            return True
        return auth.is_session_authenticated(
            permission_fn=user_can_access_study(study)
        )

    if not os.path.exists(DATA_PATH):
        log('Creating data directory at {}'.format(DATA_PATH))
        os.makedirs(DATA_PATH)

    if not os.path.exists(STUDY_PATH):
        log('Creating study directory at {}'.format(STUDY_PATH))
        os.makedirs(STUDY_PATH)

    @app.route('/manage/logout')
    def logout():
        auth.revoke_session_key()
        return redirect(url_for('manage_view'))

    @app.route('/manage/<study>/', methods=['GET', 'POST'])
    def manage_specific_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        if 'newfiles' in request.files:
            try:
                exp_server.update_study_files(
                    study,
                    request.files.getlist('newfiles')
                )
                flash('Uploaded new version of "{}"'.format(
                    study
                ))
            except Exception as e:
                flash(str(e))
        return render_template(
            'manage_study.html',
            study=exp_server.get_experiment(study),
            user=auth.get_authed_user()
        )

    @app.route('/manage/<study>/activate', methods=['GET', 'POST'])
    def activate_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        exp = exp_server.get_experiment(study)
        if exp.is_active():
            flash('Study is already active!')
        elif request.method == 'POST':
            size = request.values.get('numSessions')
            if not len(size):
                size = None
            access_type = request.values.get('accessType')
            completion_url = request.values.get('completionUrl')
            briefing_url = request.values.get('briefingUrl')
            if not len(completion_url):
                completion_url = None
            cancel_url = request.values.get('cancelUrl')
            if not len(cancel_url):
                cancel_url = None
            if not len(briefing_url):
                briefing_url = None
            save_incomplete_data = 'saveOnIncomplete' in request.values
            if size is not None and access_type is not None:
                try:
                    if size == 'unlimited':
                        size = None
                    else:
                        try:
                            size = int(size)
                            if size <= 0:
                                raise ValueError()
                        except:
                            raise ValueError(
                                'Please enter a positive whole number for session limit')
                    if access_type not in [
                            'anyone',
                            'invite-only',
                            'invite-and-url',
                            'url-only']:
                        raise ValueError('Unknown access type')
                    exp.start_run(
                        size=size,
                        access_type=access_type,
                        completion_url=completion_url,
                        cancel_url=cancel_url,
                        save_incomplete_data=save_incomplete_data,
                        briefing_url=briefing_url
                    )
                    if access_type in ['invite-and-url', 'url-only']:
                        exp_server.add_secret_url(study)
                    flash('Study is now active.')
                    return redirect(url_for('manage_specific_study', study=study))
                except Exception as e:
                    flash(str(e))
        return render_template(
            'activate_study.html',
            study=exp,
            user=auth.get_authed_user()
        )

    @app.route('/manage/<study>/deactivate', methods=['GET', 'POST'])
    def deactivate_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        exp = exp_server.get_experiment(study)
        if not exp.is_active():
            abort(404)
        if request.method == 'POST':
            if request.values.get('revoke-codes', False):
                exp_server.revoke_participant_codes(study)
                flash('Revoked all invite codes.'.format(study))
            exp.cancel_run()
            flash('Study is now inactive.')
            return redirect(url_for('manage_specific_study', study=study))
        return render_template(
            'deactivate_study.html',
            study=exp,
            user=auth.get_authed_user(),
        )

    @app.route('/manage/<study>/data/', methods=['GET'])
    def download_study_data(study):
        if not admin_access_allowed(study=study):
            abort(404)
        with exp_server.get_study_data_archive(study) as data_file:
            # cache_timeout: prevent Flask from caching data archive
            return send_file(data_file, as_attachment=True, cache_timeout=-1)

    @app.route('/manage/<study>/delete/', methods=['GET', 'POST'])
    def delete_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        if request.values.get('confirm', False):
            delete_data=request.values.get('delete_data', False)
            exp_server.delete_study(study, delete_data=delete_data)
            flash('Deleted study "{}"'.format(study))
            return redirect(url_for('manage_view'))
        elif request.method == 'POST':
            flash('"Confirm" was not checked, so no action was taken.')
        return render_template(
            'delete_study.html',
            study=exp_server.get_experiment(study),
            user=auth.get_authed_user()
        )

    @app.route('/manage/<study>/invite/', methods=['GET', 'POST'])
    def create_participant_code(study):
        if not admin_access_allowed(study=study):
            abort(404)
        exp = exp_server.get_experiment(study)
        if not exp.is_active() or exp.get_access_type() not in [
                'invite-only', 'invite-and-url']:
            abort(404)
        if request.method == 'POST':
            try:
                if 'revoke-codes' in request.values:
                    exp_server.revoke_participant_codes(study)
                    #TODO: HACK for convenience
                    raise ValueError(
                        'Revoked all invite codes for {}'.format(study))
                try:
                    timeout = datetime.datetime.now() + {
                        'hour': datetime.timedelta(hours=1),
                        'day': datetime.timedelta(days=1),
                        'week': datetime.timedelta(weeks=1)
                    }[request.values['timeout']]
                except:
                    raise ValueError('Invalid timeout specified.')
                exp_server.add_invite_code(
                    study,
                    timeout=timeout,
                    session_limit=1
                )
            except ValueError as e:
                flash(str(e))
        codes = exp_server.get_participant_codes(study)
        return render_template(
            'invite_code.html',
            study=exp,
            user=auth.get_authed_user(),
            codes=codes
        )

    @app.route('/manage/new/', methods=['GET', 'POST'])
    def new_study():
        if not admin_access_allowed():
            abort(404)
        study = request.values.get('name', None)
        if study is not None:
            try:
                user = auth.get_authed_user()
                log('Creating study "{}"...'.format(study), user=user)
                exp_server.create_new_study(
                    request.values,
                    request.files.getlist('files')
                )
                flash('Created study "{}"'.format(study))
                exp_server.get_experiment(study).add_admin(
                    user
                )
                exp_server.save_study_metadata(study)
                log('Study created.', user=user, study=study)
                return redirect(url_for('manage_specific_study', study=study))
            except Exception as e:
                flash(str(e))
        return render_template(
            'new_study.html',
            user=auth.get_authed_user()
        )

    @app.route('/manage/', methods=['GET', 'POST'])
    def manage_view():
        if 'user' in request.values and 'pass' in request.values:
            try:
                auth.authenticate(
                    request.values['user'],
                    request.values['pass']
                )
            except Lockout:
                log('{} failed login attempts; user "{}" locked for {}.'.format(
                    ATTEMPTS_BEFORE_LOCKOUT,
                    request.values['user'],
                    LOCKOUT_DURATION
                ))

        if admin_access_allowed():
            user = auth.get_authed_user()
            perms = auth.get_auth()
            return render_template(
                'manage.html',
                user=user,
                studies=sorted(
                    [x for x in exp_server.get_experiments() if can_edit_study(perms, x)],
                    key=lambda e:0 if e.is_active() else 1
                ),
            )
        else:
            return render_template('login.html')

    @app.route('/done')
    def disagree_page():
        return 'You may now close this window.'

    @app.route('/participate/<code>', methods=['GET', 'POST'])
    def participate_code(code):
        try:
            study = exp_server.get_study_for_participant_code(code)
        except:
            abort(404)
        exp = exp_server.get_experiment(study)
        if exp.has_briefing_url() and request.method == 'GET':
            return render_template(
                'briefing.html',
                briefing_title='Participate in a Study',
                briefing_src=exp.get_briefing_url()
            )
        else:
            if not exp.has_briefing_url() or \
                    request.values.get('agree') is not None:
                exp_server.activate_participant_code(code)
                if not auth.check_add_auth(code):
                    log('WARN: Code has no corresponding user', code=code)
                    abort(404)
                return redirect(url_for('send_study', study=study))
            else:
                return redirect(url_for('disagree_page'))


    @app.route('/css/<path>')
    def send_css(path):
        return send_from_directory('css', path)

    @app.route('/study/<study>/js/core.js')
    def send_core_wrapper(study):
        if not study_access_allowed(study):
            abort(404)
        return send_from_directory('js', 'wrapper.js')

    @app.route('/study/<study>/js/_core.js')
    def send_core_js(study):
        if not study_access_allowed(study):
            abort(404)
        return send_from_directory('js/psychojs', 'core.js')

    @app.route('/study/<study>/js/<path:path>')
    def send_js(study, path):
        if not study_access_allowed(study):
            abort(404)
        return send_from_directory('js/psychojs', path)

    @app.route('/study/<study>/css/<path:path>')
    def send_study_css(study, path):
        if not study_access_allowed(study):
            abort(404)
        return send_from_directory('css', path)

    @app.route('/study/<study>/')
    def send_study(study):
        if not study_access_allowed(study):
            abort(404)
        return render_template('study_index.html', study=study)

    @app.route('/study/<study>/config.json')
    def send_study_config(study):
        if not study_access_allowed(study):
            abort(404)
        return jsonify(exp_server.get_config(study))

    @app.route('/study/<study>/exp.js')
    def send_study_main_js(study):
        if not study_access_allowed(study):
            abort(404)
        study_path = exp_server.get_path(study)
        return send_from_directory(study_path, 'exp.js')

    @app.route('/study/<study>/resources/<path:path>')
    def send_study_resource(study, path):
        if not study_access_allowed(study):
            abort(404)
        study_path = exp_server.get_path(study)
        return send_from_directory(os.path.join(study_path,'resources'), path)

    @app.route('/study/<study>/server/', methods=['GET', 'POST'])
    def study_server(study):
        if not study_access_allowed(study):
            abort(404)
        response = exp_server.handle_request(
            study, request, auth.get_authed_user())
        return jsonify(response)

    return app

if __name__ == '__main__':
    wsgi_app = init()
    serve(
        wsgi_app,
        host='127.0.0.1',
        port='8080'
    )
