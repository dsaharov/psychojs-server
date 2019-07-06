#!/usr/bin/env python3
from waitress import serve
from flask import Flask, send_from_directory, render_template, jsonify, \
    request, abort
from experiment_server import PsychoJsExperiment
import json
import os
from logger import log

experiments = {}
DATA_PATH = './data/'

def init():

    app = Flask(__name__, static_url_path='', static_folder='psychojs')


    if not os.path.exists(DATA_PATH):
        log('Creating data directory at {}'.format(DATA_PATH))
        os.makedirs(DATA_PATH)

    @app.route('/study/<name>/js/<path:path>')
    def send_js(name, path):
        return send_from_directory('psychojs', path)

    @app.route('/study/<name>/css/<path:path>')
    def send_css(name, path):
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
        return jsonify(experiments[study].config)

    @app.route('/study/<study>/server/', methods=['GET', 'POST'])
    def study_server(study):
        response = experiments[study].handle_request(request)
        return jsonify(response)

    @app.route('/study/<study>/<path:path>')
    def send_study_files(study, path):
        return send_from_directory('study/{}'.format(study), path)

    return app

if __name__ == '__main__':
    wsgi_app = init()
    serve(
        wsgi_app,
        host='127.0.0.1',
        port='8080'
    )
