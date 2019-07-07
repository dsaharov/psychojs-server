#!/usr/bin/env python3
from waitress import serve
from flask import Flask, send_from_directory, render_template, jsonify, \
    request, abort, session, redirect, url_for
from experiment_server import PsychoJsExperiment
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
    'admin': 'defaulto passwordo'
}


def init():
    app = Flask(__name__, static_url_path='', static_folder='psychojs')
    app.secret_key = SECRET_KEY

    experiments = {}
    auth = SimpleSessionAuth(USERS)

    if not os.path.exists(DATA_PATH):
        log('Creating data directory at {}'.format(DATA_PATH))
        os.makedirs(DATA_PATH)

    @app.route('/manage/logout')
    def logout():
        auth.revoke_session_auth()
        return redirect(url_for('manage_view'))

    @app.route('/manage/', methods=['GET', 'POST'])
    def manage_view():
        if 'user' in request.values and 'pass' in request.values:
            auth.authenticate(
                request.values['user'],
                request.values['pass']
            )

        if auth.is_session_authenticated():
            return send_from_directory('admin/', 'manage.html')
        else:
            return send_from_directory('admin/', 'login.html')

    @app.route('/study/<study>/js/<path:path>')
    def send_js(study, path):
        if study not in experiments:
            abort(404)
        return send_from_directory('psychojs', path)

    @app.route('/study/<study>/css/<path:path>')
    def send_css(study, path):
        if study not in experiments:
            abort(404)
        return send_from_directory('css', path)

    @app.route('/study/<study>/')
    def send_study(study):
        study_path = 'study/{}/'.format(study)
        if os.path.exists(study_path):
            if study not in experiments:
                study_data_path = '{}{}/'.format(
                    DATA_PATH,
                    study,
                )
                if not os.path.exists(study_data_path):
                    log('Creating data folder at {}'.format(study_data_path))
                    os.makedirs(study_data_path)
                experiments[study] = PsychoJsExperiment(
                    study,
                    study_data_path
                )
                experiments[study].load_config()
            return send_from_directory(study_path, 'index.html')
        else:
            abort(404)

    @app.route('/study/<study>/config.json')
    def send_study_config(study):
        if study not in experiments:
            abort(404)
        return jsonify(experiments[study].config)

    @app.route('/study/<study>/server/', methods=['GET', 'POST'])
    def study_server(study):
        if study not in experiments:
            abort(404)
        response = experiments[study].handle_request(request)
        return jsonify(response)

    @app.route('/study/<study>/<path:path>')
    def send_study_files(study, path):
        if study not in experiments:
            abort(404)
        return send_from_directory('study/{}'.format(study), path)

    return app

if __name__ == '__main__':
    wsgi_app = init()
    serve(
        wsgi_app,
        host='127.0.0.1',
        port='8080'
    )
