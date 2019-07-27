import json
from logger import log
import os
import tempfile
from werkzeug.utils import secure_filename
from import_study import import_study
import datetime
import shutil
import subprocess
from contextlib import contextmanager


EXPERIMENT_SESSION_TIMEOUT = datetime.timedelta(hours=2)

class ExperimentSession():

    def __init__(self, study, token, data_path, save_data_on_incomplete):
        self.token = token
        self.study = study
        self.data_path = data_path
        self.save_data_on_incomplete = save_data_on_incomplete
        self.data = {}
        self.start_time = datetime.datetime.now()

    def log(self, msg):
        log(msg, study=self.study, token=self.token)

    def accept_data(self, key, value):
        self.data[key] = value

    def save_data(self):
        for key in self.data:
            if any([s in key for s in ['..', '/', '~']]):
                self.log('Skipping {}'.format(key))
                continue
            target_file = '{}{}'.format(
                self.data_path,
                key
            )
            with open(target_file, 'w') as f:
                f.write(self.data[key])
            self.log('Wrote {}'.format(key))

    def close(self, session_completed):
        if session_completed:
            self.log('Session complete, saving data...')
            self.save_data()
        else:
            self.log('Session incomplete.')
            if self.save_data_on_incomplete:
                self.log('Saving data anyway...')
                self.save_data()

class PsychoJsExperiment():

    def __init__(self, id, data_path, study_path):
        self.id = id
        self.data_path = data_path
        self.study_path = study_path
        self.next_session_token = 1
        self.sessions = {}
        self.config = {}
        self.callbacks = {}

    def load_config(self):
        self.config = {
            'experiment': {
                'name': self.id,
                'fullpath': ';;;;' #TODO: unused
            },
            'psychoJsManager': { 'URL': './server/' },
            'saveFormat': 'CSV' #TODO: unused
        }
    def log(self, msg, **kwargs):
        log(msg, study=self.id, **kwargs)

    def get_next_session_token(self):
        token = self.next_session_token
        self.next_session_token += 1
        return str(token)

    def close_session(self, token, session_completed=False):
        self.sessions[token].close(session_completed)
        del self.sessions[token]
        if token in self.callbacks:
            self.callbacks[token]()
            del self.callbacks[token]

    def close_all_sessions(self):
        for token in self.sessions:
            self.close_session(token)

    def timeout_old_sessions(self):
        now = datetime.datetime.now()
        expired_sessions = [
            t for t in self.sessions
                if now - self.sessions[t].start_time
                    > EXPERIMENT_SESSION_TIMEOUT
        ]
        for token in expired_sessions:
            self.log('Closing expired session.', token=token)
            self.close_session(token)

    def open_session(self, finished_callback=None):
        token = self.get_next_session_token()
        self.log('Opening session', token=token)
        experiment_session = ExperimentSession(
            self.id,
            token,
            self.data_path,
            save_data_on_incomplete=True #TODO: load from settings
        )
        if finished_callback is not None:
            self.callbacks[token] = finished_callback
        self.sessions[token] = experiment_session
        return token

    def accept_data(self, key, data, token):
        self.sessions[token].accept_data(key, data)

class ExperimentServer():

    def __init__(self, data_path):
        self.experiments = {}
        self.data_path = data_path
        self.participant_codes = {}

    def log(self, msg, **kwargs):
        log(msg, **kwargs)

    def add_study(self, study):
        study_path = './study/{}/'.format(study)
        if not os.path.exists(study_path):
            self.log('New study folder: {}'.format(study_path), study=study)
            os.makedirs(study_path)
        data_path = os.path.join(
            self.data_path, study
        )
        if not os.path.exists(data_path):
            self.log('New data folder: {}'.format(data_path), study=study)
            os.makedirs(data_path)
        self.experiments[study] = PsychoJsExperiment(
            id=study,
            data_path=data_path,
            study_path=study_path
        )
        self.experiments[study].load_config()

    def _import_study_files(self, study, files, replace=False):
        if study in self.experiments and not replace:
            raise ValueError('Study "{}" already exists.'.format(study), study=study)
        with tempfile.TemporaryDirectory() as temp_dir:
            self.log('Saving study files to {}'.format(temp_dir), study=study)
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
            self.log('Copying new files', study=study)
            import_study(study, study_files, replace=replace)
            self.log('Done copying files', study=study)

    def create_new_study(self, values, files):
        study = values['name']
        bad_chars = ['/','?','+']
        name_blacklist = ['new', 'logout']
        if study is None or len(study) < 1 or \
                any([c in study for c in bad_chars]) or study in name_blacklist:
            raise ValueError('Invalid study name.')
        self.log('Trying to add new study "{}"'.format(study), study=study)
        self._import_study_files(study, files, replace=False)
        self.add_study(study)

    def update_study_files(self, study, files):
        self.log('Updating study files', study=study)
        self._import_study_files(study, files, replace=True)

    def delete_study(self, study, delete_data=False):
        log('Removing study "{}"'.format(study), study=study)
        exp = self.experiments[study]
        del self.experiments[study]
        exp.close_all_sessions()
        shutil.rmtree(os.path.join('study',study))
        if delete_data:
            shutil.rmtree(os.path.join(self.data_path, study))
            log('Removed all collected data.'.format(study), study=study)
        log('Study has been deleted.', study=study)

    @contextmanager
    def get_study_data_archive(self, study):
        if study not in self.experiments:
            raise ValueError('No such study "{}"'.format(study))
        log('Retrieving study data', study=study)
        with tempfile.TemporaryDirectory() as temp_path:
            data_file_path = os.path.join(
                temp_path, 'study_data_{}.tar.gz'.format(study))
            tar_source = os.path.join(self.experiments[study].data_path, '*')
            cmd = ' '.join([
                'tar',
                '-czf',
                data_file_path,
                tar_source
            ])
            log(cmd, study=study)
            subprocess.run(
                cmd,
                check=True,
                shell=True
            )
            yield data_file_path

    def load_experiments(self):
        if not os.path.exists('./study/'):
            self.log('Creating study directory')
            os.makedirs('./study/')

        self.log('Registering experiments...')
        for study in os.listdir('./study/'):
            self.add_study(study)
            self.log('Added "{}"'.format(study))

    def has_study(self, study):
        return study in self.experiments

    def get_path(self, study):
        return self.experiments[study].study_path

    def get_config(self, study):
        return self.experiments[study].config

    def handle_request(self, study, request, user):
        exp = self.experiments[study]
        command = request.args['command']
        exp.log('Request: {}'.format(command))
        response = {}
        token = request.values.get('token', None)
        if command == 'open_session':
            exp.timeout_old_sessions()
            if user in self.participant_codes:
                session_token = self.participant_codes[user]['session']
                del self.participant_codes[user]
            else:
                session_token = exp.open_session()
            response['token'] = session_token
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
        elif command == 'close_session':
            self.log('Closing session', token=token)
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            session_completed = request.values['isCompleted'] == 'true'
            exp.close_session(token, session_completed)
        elif command == 'save_data':
            exp.log('Incoming data', token=token)
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            save_format = request.values['saveFormat']
            exp.log('Save format is "{}"'.format(save_format), token=token)
            key = request.values['key']
            data = request.values['value']
            exp.accept_data(key, data, token)
        return response

    def experiment_names(self):
        return self.experiments.keys()

    def add_participant_code(self, code, study, callback):
        self.participant_codes[code] = {
            'study': study,
            'session': self.experiments[study].open_session(
                finished_callback=callback
            )
        }

    def activate_participant_code(self, code):
        if code not in self.participant_codes:
            raise ValueError()
        study = self.participant_codes[code]['study']
        return study
