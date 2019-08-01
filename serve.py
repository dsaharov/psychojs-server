#!/usr/bin/env python3
from waitress import serve
from flask import Flask, send_from_directory, render_template, jsonify, \
    request, abort, session, redirect, url_for, send_file
from experiment_server import ExperimentServer
import json
import os
from logger import log
import hashlib
import datetime
from auth import SimpleSessionAuth, Lockout


# Generate a key for signing session cookies
SECRET_KEY = hashlib.sha224(
    str(datetime.datetime.now()).encode(encoding='UTF-8')
).hexdigest()
DATA_PATH = './data/'
STUDY_PATH = './study/'
USERS = {
    'admin': {
        'password': 'default',
        'permissions': {
            'can_manage': True
        }
    }
}
def user_can_manage(auth):
    return auth.get('can_manage', False)

def user_can_access_study(study):
    return (
        lambda auth: user_can_manage(auth) or study in auth.get('studies', [])
    )

ALLOW_UNAUTHED_STUDY_ACCESS = False
ATTEMPTS_BEFORE_LOCKOUT = 10
LOCKOUT_DURATION = datetime.timedelta(minutes=10)


def init():
    app = Flask(__name__, static_url_path='', static_folder='psychojs')
    app.secret_key = SECRET_KEY
    auth = SimpleSessionAuth(
        USERS,
        timeout_attempts=ATTEMPTS_BEFORE_LOCKOUT,
        timeout_duration=LOCKOUT_DURATION
    )
    def admin_access_allowed(study=None):
        if study is not None:
            return auth.is_session_authenticated(
                permission_fn=user_can_access_study(study)
            )
        return auth.is_session_authenticated(
            permission_fn=user_can_manage
        )
    def study_access_allowed(study):
        if not exp_server.study_available(study):
            return False
        if ALLOW_UNAUTHED_STUDY_ACCESS:
            return True
        return auth.is_session_authenticated(
            permission_fn=user_can_access_study(study)
        )

    if not os.path.exists(DATA_PATH):
        log('Creating data directory at {}'.format(DATA_PATH))
        os.makedirs(DATA_PATH)

    if not os.path.exists(STUDY_PATH):
        log('Creating study directory at {}'.format(STUDY_PATHSTUDY_PATH))
        os.makedirs(STUDY_PATH)

    exp_server = ExperimentServer(DATA_PATH, STUDY_PATH)
    exp_server.load_experiments()

    @app.route('/manage/logout')
    def logout():
        auth.revoke_session_key()
        return redirect(url_for('manage_view'))

    @app.route('/manage/<study>/', methods=['GET', 'POST'])
    def manage_specific_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        message = None
        if 'newfiles' in request.files:
            try:
                exp_server.update_study_files(
                    study,
                    request.files.getlist('newfiles')
                )
                message = 'Uploaded new version of "{}"'.format(
                    study
                )
            except Exception as e:
                message = str(e)
        return render_template(
            'manage_study.html',
            study=exp_server.get_experiment(study),
            user=auth.get_authed_user(),
            message=message
        )

    @app.route('/manage/<study>/activate')
    def activate_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        exp = exp_server.get_experiment(study)
        message = 'Study is already active!'
        if not exp.is_active():
            exp.start_run()
            message = 'Study is now active.'
        return render_template(
            'manage_study.html',
            study=exp,
            user=auth.get_authed_user(),
            message=message
        )

    @app.route('/manage/<study>/deactivate')
    def deactivate_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        exp = exp_server.get_experiment(study)
        message = 'Study was not running!'
        if exp.is_active():
            exp.cancel_run()
            message = 'Study is now inactive.'
        return render_template(
            'manage_study.html',
            study=exp,
            user=auth.get_authed_user(),
            message=message
        )

    @app.route('/manage/<study>/data/', methods=['GET'])
    def download_study_data(study):
        if not admin_access_allowed(study=study):
            abort(404)
        with exp_server.get_study_data_archive(study) as data_file:
            return send_file(data_file, as_attachment=True)

    @app.route('/manage/<study>/delete/', methods=['GET', 'POST'])
    def delete_study(study):
        if not admin_access_allowed(study=study):
            abort(404)
        message = None
        if request.values.get('confirm', False):
            delete_data=request.values.get('delete_data', False)
            exp_server.delete_study(study, delete_data=delete_data)
            #TODO: show message on study list page
            return redirect(url_for('manage_view'))
        elif request.method == 'POST':
            message = '"Confirm" was not checked, so no action was taken.'
        return render_template(
            'delete_study.html',
            study=exp_server.get_experiment(study),
            user=auth.get_authed_user(),
            message=message
        )

    @app.route('/manage/<study>/invite/')
    def create_participant_code(study):
        if not admin_access_allowed(study=study):
            abort(404)
        try:
            username = auth.create_temporary_user(
                properties={
                    'permissions': {
                        'studies': [study]
                    }
                },
                readable_name=True
            )
            def remove_temp_user():
                log('Removing temp user',code=username)
                auth.delete_user(username)
            exp_server.add_participant_code(
                username,
                study,
                callback=remove_temp_user
            )
        except:
            abort(404)

        return render_template(
            'invite_code.html',
            study=study,
            user=auth.get_authed_user(),
            code=username
        )

    @app.route('/participate/<code>')
    def participate_code(code):
        try:
            study = exp_server.activate_participant_code(code)
        except:
            abort(404)
        log('Participant code accessed', code=code)
        if not auth.check_add_auth(code):
            log('WARN: Code has no corresponding user', code=code)
            abort(404)
        return redirect(url_for('send_study', study=study))

    @app.route('/manage/new/', methods=['GET', 'POST'])
    def new_study():
        if not admin_access_allowed():
            abort(404)
        message=None
        study = request.values.get('name', None)
        if study is not None:
            try:
                exp_server.create_new_study(
                    request.values,
                    request.files.getlist('files')
                )
                return redirect(url_for('manage_specific_study', study=study))
            except Exception as e:
                message = str(e)
        return render_template(
            'new_study.html',
            user=auth.get_authed_user(),
            message=message
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
            return render_template(
                'manage.html',
                user=auth.get_authed_user(),
                studies=sorted(
                    exp_server.get_experiments(),
                    key=lambda e:0 if e.is_active() else 1
                ),
            )
        else:
            return render_template('login.html')

    @app.route('/css/<path>')
    def send_css(path):
        return send_from_directory('css', path)

    @app.route('/study/<study>/js/<path:path>')
    def send_js(study, path):
        if not study_access_allowed(study):
            abort(404)
        return send_from_directory('psychojs', path)

    @app.route('/study/<study>/css/<path:path>')
    def send_study_css(study, path):
        if not study_access_allowed(study):
            abort(404)
        return send_from_directory('css', path)

    @app.route('/study/<study>/')
    def send_study(study):
        if not study_access_allowed(study):
            abort(404)
        study_path = exp_server.get_path(study)
        return send_from_directory(study_path, 'index.html')

    @app.route('/study/<study>/config.json')
    def send_study_config(study):
        if not study_access_allowed(study):
            abort(404)
        return jsonify(exp_server.get_config(study))

    @app.route('/study/<study>/server/', methods=['GET', 'POST'])
    def study_server(study):
        if not study_access_allowed(study):
            abort(404)
        response = exp_server.handle_request(
            study, request, auth.get_authed_user())
        return jsonify(response)

    @app.route('/study/<study>/<path:path>')
    def send_study_files(study, path):
        if not study_access_allowed(study):
            abort(404)
        study_path = exp_server.get_path(study)
        return send_from_directory(study_path, path)

    return app

if __name__ == '__main__':
    wsgi_app = init()
    serve(
        wsgi_app,
        host='127.0.0.1',
        port='8080'
    )
