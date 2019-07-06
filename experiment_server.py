import json
import datetime

def log(str):
    print('[{}] {}'.format(
        datetime.datetime.now(),
        str
    ))

class ExperimentSession():

    def __init__(self, token):
        self.token = token
        self.data = {}

    def accept_data(self, key, value):
        self.data[key] = value

    def close(self, session_completed):
        if session_completed:
            log('Session {} complete, saving data...'.format(self.token))
            log(', '.join(key for key in self.data))
        else:
            log('Session {} incomplete.'.format(self.token))
            log(', '.join(key for key in self.data))


class PsychoJsExperiment():

    def __init__(self, id):
        self.id = id
        self.next_session_token = 1
        self.sessions = {}
        self.config = {}

    def load_config(self):
        self.config = {
            'experiment': {
                'name': self.id,
                'fullpath': ';;;;' #TODO: unused
            },
            'psychoJsManager': { 'URL': './server/' },
            'saveFormat': 'CSV' #TODO: unused
        }
    def get_next_session_token(self):
        token = self.next_session_token
        self.next_session_token += 1
        return str(token)

    def handle_request(self, request):
        command = request.args['command']
        log('Request to server "{}": {}'.format(self.id, command))
        response = {}
        token = request.values.get('token', None)
        if command == 'open_session':
            token = self.get_next_session_token()
            log('Opening session {} of {}'.format(token, self.id))
            experiment_session = ExperimentSession(token)
            self.sessions[token] = experiment_session
            response['token'] = token
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
        elif command == 'close_session':
            log('Closing session {} of {}'.format(token, self.id))
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            session_completed = request.values['isCompleted']
            self.sessions[token].close(session_completed)
            del self.sessions[token]
        elif command == 'save_data':
            log('Got data for session {} of {}'.format(token, self.id))
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            # save_format = request.values['saveFormat']
            key = request.values['key']
            data = request.values['value']
            self.sessions[token].accept_data(key, data)
        return response
