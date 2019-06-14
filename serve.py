#!/usr/bin/env python3
from waitress import serve
from flask import Flask, send_from_directory, render_template
import json

def init():

    app = Flask(__name__, static_url_path='', static_folder='psychojs')

    @app.route('/study/<name>/js/<path:path>')
    def send_js(name, path):
        return send_from_directory('psychojs', path)

    @app.route('/study/<name>/css/<path:path>')
    def send_css(name, path):
        return send_from_directory('css', path)

    @app.route('/study/<study>/')
    def send_study(study):
        return send_from_directory('study/{}/'.format(study), 'index.html')

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
