#!/usr/bin/env python3
from waitress import serve
from flask import Flask, send_from_directory, render_template
import json

def init():

    app = Flask(__name__, static_url_path='')

    @app.route('/study/js/<path:path>')
    def send_js(path):
        return send_from_directory('psychojs', path)

    @app.route('/study/css/<path:path>')
    def send_css(path):
        return send_from_directory('css', path)

    @app.route('/study/resources/<path:path>')
    def send_resource(path):
        return send_from_directory('resources', path)

    @app.route('/study/<path:path>')
    def send_study(path):
        return send_from_directory('study', path)

    return app

if __name__ == '__main__':
    wsgi_app = init()
    serve(
        wsgi_app,
        host='127.0.0.1',
        port='8080'
    )
