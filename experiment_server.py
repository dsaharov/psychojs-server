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

    def __init__(self, run, token, data_path, save_data_on_incomplete):
        self.token = token
        self.run = run
        self.data_path = data_path
        self.save_data_on_incomplete = save_data_on_incomplete
        self.data = {}
        self.start_time = datetime.datetime.now()
        self.has_data = False
        self.is_complete = False

    def log(self, msg, **kwargs):
        self.run.log(msg, token=self.token, **kwargs)

    def accept_data(self, key, value, save_format):
        self.log('Incoming data, format {}'.format(save_format))
        self.data[key] = value
        self.has_data = True

    def save_data(self):
        for key in self.data:
            if any([s in key for s in ['..', '/', '~']]):
                self.log('Skipping {}'.format(key))
                continue
            target_file = os.path.join(
                self.data_path,
                key
            )
            with open(target_file, 'w') as f:
                f.write(self.data[key])
            self.log('Wrote {}'.format(key))

    def close(self, session_completed=False):
        self.log('Closing session ({})'.format(
            'complete' if session_completed else 'incomplete'
        ))
        self.is_complete = session_completed
        if self.has_data and \
                (session_completed or self.save_data_on_incomplete):
            self.log('Saving data...')
            self.save_data()
        self.run.on_session_closed(self)


class ExperimentRun():
    # A run is one deployment of an experiment
    # It is expected to yield N sessions of data
    # There might be no limit to the number of sessions
    # Each run should store its data seperately
    # The run might be closed at any time by the researcher

    def __init__(self, exp, id, data_path, size=None, access_type='invite-only'):
        self.experiment = exp
        self.id = id
        self.data_path = data_path
        # Sessions
        self.next_session_token = 0
        self.sessions = {}
        # Access
        self.size = size
        self.num_sessions = 0
        self.access_type = access_type

    def log(self, msg, **kwargs):
        self.experiment.log(msg, run=self.id, **kwargs)

    def get_remaining_sessions(self):
        if self.size is None:
            return None
        return self.size - self.num_sessions

    def get_next_session_token(self):
        self.next_session_token += 1
        return str(self.next_session_token)

    def finish_run(self):
        self.log('Run complete')
        self.experiment.on_run_finished(self)

    def on_session_closed(self, session):
        if session.has_data:
            self.num_sessions += 1
        token = session.token
        del self.sessions[token]
        self.experiment.on_session_closed(session)
        if self.size is not None and self.get_remaining_sessions() == 0:
            self.finish_run()

    def has_session(self, token):
        return token in self.sessions

    def get_session(self, token):
        return self.sessions[token]

    def close_all_sessions(self):
        for session in list(self.sessions.values()):
            session.close()

    def timeout_old_sessions(self):
        now = datetime.datetime.now()
        expired_sessions = [
            t for t in self.sessions
                if now - self.sessions[t].start_time
                    > EXPERIMENT_SESSION_TIMEOUT
        ]
        for token in expired_sessions:
            self.log('Closing expired session.', token=token)
            self.sessions[token].close()

    def open_session(self):
        token = self.get_next_session_token()
        self.log('Opening session', token=token)
        experiment_session = ExperimentSession(
            self,
            token,
            self.data_path,
            save_data_on_incomplete=True #TODO: load from settings
        )
        self.sessions[token] = experiment_session
        return token

    def cancel(self):
        self.close_all_sessions()
        self.finish_run()


class PsychoJsExperiment():

    def __init__(self, server, id, data_path):
        self.server = server
        self.id = id
        self.config = {}
        # Filesystem location
        self.data_path = data_path
        # Current run
        self.next_run_id = 1 #TODO: this needs to persist (key for data)
        self.run = None
        # Permissions
        self.admins = set()

    def log(self, msg, **kwargs):
        self.server.log(msg, study=self.id, **kwargs)

    def load_config(self):
        self.config = {
            'experiment': {
                'name': self.id,
                'fullpath': ';;;;' #TODO: unused
            },
            'psychoJsManager': { 'URL': './server/' },
            'saveFormat': 'CSV' #TODO: unused
        }

    def is_active(self):
        return self.run is not None

    def get_access_type(self):
        if not self.is_active():
            raise ValueError()
        return self.run.access_type

    def has_session(self, token):
        if not self.is_active():
            return False
        return self.run.has_session(token)

    def get_session(self, token):
        if not self.is_active():
            raise ValueError()
        return self.run.get_session(token)

    def timeout_old_sessions(self):
        if not self.is_active():
            raise ValueError()
        self.run.timeout_old_sessions()

    def get_next_run_id(self):
        id = self.next_run_id
        self.next_run_id += 1
        return id

    def start_run(self, size=None, access_type='invite-only'):
        if self.is_active():
            raise ValueError()
        while True:
            id = self.get_next_run_id()
            run_data_path = os.path.join(
                self.data_path, 'run_{}'.format(id)
            )
            #TODO: HACK
            if not os.path.exists(run_data_path):
                break
        self.log('Starting run {}'.format(id))
        self.run = ExperimentRun(
            self,
            id,
            run_data_path,
            size,
            access_type
        )
        os.makedirs(run_data_path)

    def cancel_run(self):
        if not self.is_active():
            raise ValueError()
        self.run.cancel()

    def open_session(self):
        if not self.is_active():
            raise ValueError()
        return self.run.open_session()

    def on_session_closed(self, session):
        self.server.on_session_closed(self, session)

    def get_remaining_sessions(self):
        if not self.is_active():
            return 0
        return self.run.get_remaining_sessions()

    def get_total_sessions(self):
        if not self.is_active():
            return 0
        return self.run.size

    def get_num_sessions(self):
        if not self.is_active():
            return 0
        return self.run.num_sessions

    def has_session_limit(self):
        return self.get_remaining_sessions() is not None

    def on_run_finished(self, run):
        self.run = None

    def is_editable_by(self, user):
        return user in self.admins

    def add_admin(self, user):
        self.admins.add(user)

    def remove_admin(self, user):
        self.admins.remove(user)

    def meta_to_json_str(self):
        meta = {}
        meta['admins'] = list(self.admins)
        return json.dumps(meta)

    def load_meta_json_str(self, json_str):
        meta = json.loads(json_str)
        self.admins = set(meta['admins'])


class ExperimentServer():

    def __init__(self, data_path, study_path):
        self.experiments = {}
        self.data_path = data_path
        self.study_path = study_path
        # Participant codes
        self.participant_codes = {}
        self.session_code_map = {}

    def log(self, msg, **kwargs):
        log(msg, **kwargs)

    def get_metafile_path(self, study):
        return os.path.join(
            self.study_path,
            study,
            'meta.json'
        )

    def save_study_metadata(self, study):
        with open(self.get_metafile_path(study), 'w') as md:
            md.write(self.experiments[study].meta_to_json_str())

    def load_study_metadata(self, study):
        with open(self.get_metafile_path(study)) as md:
            self.experiments[study].load_meta_json_str(
                md.read()
            )

    def add_study(self, study):
        study_path = os.path.join(self.study_path, study)
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
            server=self,
            id=study,
            data_path=data_path
        )
        self.experiments[study].load_config()

    def _import_study_files(self, study, files, replace=False):
        if study in self.experiments and not replace:
            raise ValueError('Study "{}" already exists.'.format(study))
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
        if self.experiments[study].is_active():
            raise ValueError('Study is currently running; deactivate it before changing files.')
        self.log('Updating study files', study=study)
        self._import_study_files(study, files, replace=True)

    def delete_study(self, study, delete_data=False):
        log('Removing study "{}"'.format(study), study=study)
        exp = self.experiments[study]
        del self.experiments[study]
        if exp.is_active():
            exp.cancel_run()
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
            tar_source = self.experiments[study].data_path
            cmd = ' '.join([
                'tar',
                '-czf',
                data_file_path,
                '*'
            ])
            log(cmd, study=study)
            subprocess.run(
                cmd,
                check=True,
                shell=True,
                cwd=tar_source
            )
            yield data_file_path

    def load_experiments(self):
        if not os.path.exists(self.study_path):
            self.log('Creating study directory')
            os.makedirs(self.study_path)

        self.log('Registering experiments...')
        for study in os.listdir(self.study_path):
            self.log('Adding "{}"...'.format(study))
            self.add_study(study)
            self.load_study_metadata(study)

    def study_available(self, study):
        return study in self.experiments and \
            self.experiments[study].is_active()

    def get_path(self, study):
        return os.path.join(self.study_path, study)

    def get_config(self, study):
        return self.experiments[study].config

    def handle_request(self, study, request, user):
        exp = self.experiments[study]
        command = request.args['command']
        exp.log('Request: {}'.format(command))
        response = {}
        token = request.values.get('token', None)
        if token is not None:
            session = exp.get_session(token)
        if command == 'open_session':
            exp.timeout_old_sessions()
            if user in self.participant_codes:
                token = self.participant_codes[user]['session']
            else:
                token = exp.open_session()
            response['token'] = token
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
        elif command == 'close_session':
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            session_completed = request.values['isCompleted'] == 'true'
            session.close(session_completed)
        elif command == 'save_data':
            #TODO: unusued parameters
            # experiment_full_path = request.values['experimentFullPath']
            save_format = request.values['saveFormat']
            key = request.values['key']
            data = request.values['value']
            session.accept_data(key, data, save_format)
        return response

    def get_experiments(self):
        return self.experiments.values()

    def get_experiment(self, study):
        return self.experiments[study]

    def add_participant_code(self, code, study, **kwargs):
        code_props = {
            'study': study
        }
        code_props.update(kwargs)
        self.participant_codes[code] = code_props

    def remove_participant_code(self, code):
        self.log('Removing participant code', code=code)
        props = self.participant_codes[code]
        if 'on_expire' in props:
            props['on_expire']()
        if 'session' in props:
            del self.session_code_map[(props['study'], props['session'])]
        del self.participant_codes[code]

    def on_session_closed(self, experiment, session):
        try:
            key = (
                experiment.id,
                session.token
            )
            code = self.session_code_map[key]
            self.remove_participant_code(code)
        except KeyError:
            pass # harmless

    def remove_code_and_session(self, code):
        props = self.participant_codes[code]
        if 'session' in props:
            self.experiments[props['study']].get_session(
                props['session']).close()
        else:
            self.remove_participant_code(code)

    def activate_participant_code(self, code):
        props = self.participant_codes[code]
        study = props['study']
        exp = self.experiments[study]
        if 'timeout' in props and \
                datetime.datetime.now() >= props['timeout']:
            self.log('Participant code is expired', code=code)
            self.remove_code_and_session(code)
            raise ValueError()
        self.log('Participant code accessed', code=code)
        if 'session' not in props:
            session_token = exp.open_session()
            props['session'] = session_token
            self.session_code_map[(study, session_token)] = code
        return study

    def get_participant_codes(self, study):
        codes = []
        for code in self.participant_codes:
            props = self.participant_codes[code]
            if props['study'] == study:
                code_obj = {
                    'code': code
                }
                code_obj.update(props)
                codes.append(code_obj)
        return codes

    def revoke_participant_codes(self, study):
        self.log('Revoking all participant codes', study=study)
        target_codes = [
            code for code in self.participant_codes if
                self.participant_codes[code]['study'] == study
        ]
        for code in target_codes:
            self.remove_code_and_session(code)
