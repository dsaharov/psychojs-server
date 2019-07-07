#!/usr/bin/env python3
from waitress import serve
from flask import Flask, send_from_directory, render_template, jsonify, \
    request, abort, session, redirect, url_for
from experiment_server import ExperimentServer
import json
import os
from logger import log
import hashlib
import datetime
from auth import SimpleSessionAuth


# Generate a key for signing session cookies
SECRET_KEY = hashlib.sha224(
    str(datetime.datetime.now()).encode(encoding='UTF-8')
).hexdigest()
DATA_PATH = './data/'
USERS = {
    'admin': 'default'
}


def init():
    app = Flask(__name__, static_url_path='', static_folder='psychojs')
    app.secret_key = SECRET_KEY
    auth = SimpleSessionAuth(USERS)

    exp_server = ExperimentServer(DATA_PATH)
    exp_server.load_experiments()

    if not os.path.exists(DATA_PATH):
        log('Creating data directory at {}'.format(DATA_PATH))
        os.makedirs(DATA_PATH)

    @app.route('/manage/logout')
    def logout():
        auth.revoke_session_auth()
        return redirect(url_for('manage_view'))

    @app.route('/manage/<study>', methods=['GET', 'POST'])
    def manage_specific_study(study):
        if not auth.is_session_authenticated() or \
                not exp_server.has_study(study):
            abort(404)
        return render_template(
            'manage_study.html',
            study=study,
            user=auth.get_authed_user()
        )

    @app.route('/manage/', methods=['GET', 'POST'])
    def manage_view():
        if 'user' in request.values and 'pass' in request.values:
            auth.authenticate(
                request.values['user'],
                request.values['pass']
            )

        if auth.is_session_authenticated():

            return render_template(
                'manage.html',
                user=auth.get_authed_user(),
                studies=exp_server.experiment_names()
            )
        else:
            return render_template('login.html')

    @app.route('/study/<study>/js/<path:path>')
    def send_js(study, path):
        if not exp_server.has_study(study):
            abort(404)
        return send_from_directory('psychojs', path)

    @app.route('/study/<study>/css/<path:path>')
    def send_css(study, path):
        if not exp_server.has_study(study):
            abort(404)
        return send_from_directory('css', path)

    @app.route('/study/<study>/')
    def send_study(study):
        if not exp_server.has_study(study):
            abort(404)
        study_path = exp_server.get_path(study)
        return send_from_directory(study_path, 'index.html')


    @app.route('/study/<study>/config.json')
    def send_study_config(study):
        if not exp_server.has_study(study):
            abort(404)
        return jsonify(exp_server.get_config(study))

    @app.route('/study/<study>/server/', methods=['GET', 'POST'])
    def study_server(study):
        if not exp_server.has_study(study):
            abort(404)
        response = exp_server.handle_request(study, request)
        return jsonify(response)

    @app.route('/study/<study>/<path:path>')
    def send_study_files(study, path):
        if not exp_server.has_study(study):
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
