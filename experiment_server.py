import json
from logger import log
import os
import tempfile
from werkzeug.utils import secure_filename
from import_study import import_study

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

    def __init__(self, id, data_path, study_path):
        self.id = id
        self.data_path = data_path
        self.study_path = study_path
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

class ExperimentServer():

    def __init__(self, data_path):
        self.experiments = {}
        self.data_path = data_path

    def add_study(self, study):
        study_path = './study/{}/'.format(study)
        if not os.path.exists(study_path):
            log('New study folder: {}'.format(study_path))
            os.makedirs(study_path)
        data_path = '{}{}/'.format(
            self.data_path,
            study
        )
        if not os.path.exists(data_path):
            log('New data folder: {}'.format(data_path))
            os.makedirs(data_path)
        self.experiments[study] = PsychoJsExperiment(
            id=study,
            data_path=data_path,
            study_path=study_path
        )
        self.experiments[study].load_config()

    def _import_study_files(self, study, files, replace=False):
        if study in self.experiments and not replace:
            raise ValueError('Study "{}" already exists.'.format(study))
        with tempfile.TemporaryDirectory() as temp_dir:
            log('Saving study files to {}'.format(temp_dir))
            study_files = []
            for file in files:
                path = file.filename
                new_filename = secure_filename(path)[len('html_'):]
                full_path = os.path.join(
                    temp_dir,
                    new_filename
                )
                study_files.append({
                    'path': path,
                    'full_path': full_path,
                    'name': new_filename
                })
                file.save(full_path)
            log('Copying files for "{}"'.format(study))
            import_study(study, study_files, replace=replace)
            log('Done importing study "{}"'.format(study))

    def create_new_study(self, values, files):
        study = values['name']
        bad_chars = ['/','?','+']
        name_blacklist = ['new', 'logout']
        if study is None or len(study) < 1 or \
                any([c in study for c in bad_chars]) or study in name_blacklist:
            raise ValueError('Invalid study name.')
        log('Trying to add new study "{}"'.format(study))
        self._import_study_files(study, files, replace=False)
        self.add_study(study)

    def update_study_files(self, study, files):
        log('Updating files for "{}"'.format(study))
        self._import_study_files(study, files, replace=True)

    def load_experiments(self):
        if not os.path.exists('./study/'):
            log('Creating study directory')
            os.makedirs('./study/')

        log('Registering experiments...')
        for study in os.listdir('./study/'):
            self.add_study(study)
            log('Added "{}"'.format(study))

    def has_study(self, study):
        return study in self.experiments

    def get_path(self, study):
        return self.experiments[study].study_path

    def get_config(self, study):
        return self.experiments[study].config

    def handle_request(self, study, request):
        return self.experiments[study].handle_request(request)

    def experiment_names(self):
        return self.experiments.keys()
