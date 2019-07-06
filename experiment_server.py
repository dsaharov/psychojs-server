import json
from logger import log

class ExperimentSession():

    def __init__(self, token, data_path, save_data_on_incomplete):
        self.token = token
        self.data_path = data_path
        self.save_data_on_incomplete = save_data_on_incomplete
        self.data = {}

    def accept_data(self, key, value):
        self.data[key] = value

    def save_data(self):
        for key in self.data:
            if any([s in key for s in ['..', '/', '~']]):
                log('Skipping {}'.format(key))
                continue
            target_file = '{}{}'.format(
                self.data_path,
                key
            )
            with open(target_file, 'w') as f:
                f.write(self.data[key])
            log('Wrote {}'.format(key))

    def close(self, session_completed):
        if session_completed:
            log('Session {} is complete, saving data...'.format(self.token))
            self.save_data()
        else:
            log('Session {} is incomplete.'.format(self.token))
            if self.save_data_on_incomplete:
                log('Saving data anyway...')
                self.save_data()

class PsychoJsExperiment():

    def __init__(self, id, data_path):
        self.id = id
        self.data_path = data_path
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
            experiment_session = ExperimentSession(
                token,
                self.data_path,
                save_data_on_incomplete=True #TODO: load from settings
            )
            self.sessions[token] = experiment_session
            response['token'] = token
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
        elif command == 'close_session':
            log('Closing session {} of {}'.format(token, self.id))
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            session_completed = request.values['isCompleted'] == 'true'
            self.sessions[token].close(session_completed)
            del self.sessions[token]
        elif command == 'save_data':
            log('Got data for session {} of {}'.format(token, self.id))
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            save_format = request.values['saveFormat']
            log('The save format is "{}"'.format(save_format))
            key = request.values['key']
            data = request.values['value']
            self.sessions[token].accept_data(key, data)
        return response
