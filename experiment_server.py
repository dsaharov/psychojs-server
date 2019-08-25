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
from dateutil.parser import parse as parse_datestr
import urllib
import random


EXPERIMENT_SESSION_TIMEOUT = datetime.timedelta(hours=2)

class ExperimentSession():

    def __init__(self, run, token, data_path, session_args={}):
        self.token = token
        self.run = run
        self.data_path = data_path
        self.data = {}
        self.start_time = datetime.datetime.now()
        self.has_data = False
        self.is_complete = False
        self.session_args = session_args

    def log(self, msg, **kwargs):
        self.run.log(msg, token=self.token, **kwargs)

    def accept_data(self, key, value, save_format):
        self.log('Incoming data, format {}'.format(save_format))
        if value is None or len(value) < 1 or value == '\n':
            self.log('Data is empty, ignoring.')
        else:
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

    def set_completed(self, completed):
        self.is_complete = completed

    def close(self, bulk=False):
        self.log('Closing session ({})'.format(
            'complete' if self.is_complete else 'incomplete'
        ))
        if self.has_data and \
                (self.is_complete or self.run.save_incomplete_data):
            self.log('Saving data...')
            self.save_data()
        self.run.on_session_closed(self, bulk)

    def get_redirect_url_override(self):
        if self.is_complete:
            return self.run.completion_url
        else:
            return self.run.cancel_url


class ExperimentRun():
    # A run is one deployment of an experiment
    # It is expected to yield N sessions of data
    # There might be no limit to the number of sessions
    # Each run should store its data seperately
    # The run might be closed at any time by the researcher

    def __init__(self,
            exp,
            id,
            data_path,
            size=None,
            access_type='invite-only',
            completion_url=None,
            cancel_url=None,
            save_incomplete_data=True,
            briefing_url=None,
            debriefing_url=None,
            session_args={}):
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
        # Redirect URLs
        self.completion_url = completion_url
        self.cancel_url = cancel_url
        # Data settings
        self.save_incomplete_data = save_incomplete_data
        # Briefing
        self.briefing_url = briefing_url
        self.debriefing_url = debriefing_url
        # Session URL params
        self.session_args = session_args
        self.arg_counts = {}

    def to_dict(self):
        obj = {
            'id' : self.id,
            'data_path': self.data_path,
            'size': self.size,
            'num_sessions': self.num_sessions,
            'access_type': self.access_type,
            'completion_url': self.completion_url,
            'cancel_url': self.cancel_url,
            'save_incomplete_data': self.save_incomplete_data,
            'briefing_url': self.briefing_url,
            'debriefing_url': self.debriefing_url,
            'session_args': json.dumps(self.session_args),
            'arg_counts': json.dumps(self.arg_counts)
        }
        return obj

    def from_dict(exp, obj):
        run = ExperimentRun(
            exp,
            obj['id'],
            obj['data_path'],
            obj.get('size'),
            obj.get('access_type', 'invite-only'),
            obj.get('completion_url'),
            obj.get('cancel_url'),
            obj.get('save_incomplete_data', True),
            obj.get('briefing_url', None),
            obj.get('debriefing_url', None),
            json.loads(obj.get('session_args', '{}'))
        )
        run.arg_counts = json.loads(obj.get('arg_counts', '{}'))
        run.num_sessions = obj['num_sessions']
        return run

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

    def on_session_closed(self, session, bulk=False):
        if session.has_data and (
                session.is_complete or self.save_incomplete_data):
            self.num_sessions += 1
        else:
            # This submission does not count, undo its session args contribution
            for key in session.session_args:
                val = session.session_args[key]
                self.decrement_arg_count(key, val)
                if self.arg_counts[key][val] == 0:
                    del self.arg_counts[key][val]

        token = session.token
        del self.sessions[token]
        self.experiment.on_session_closed(session, bulk=bulk)
        if self.size is not None and self.get_remaining_sessions() == 0:
            self.finish_run()
        elif not bulk:  #TODO: HACK to prevent extra file writes
            self.experiment.save_metadata()

    def has_session(self, token):
        return token in self.sessions

    def get_session(self, token):
        return self.sessions[token]

    def close_all_sessions(self):
        for session in list(self.sessions.values()):
            #TODO: HACK to prevent extra file writes
            session.close(bulk=True)

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

    def get_arg_count(self, key, value):
        if key not in self.arg_counts:
            self.arg_counts[key] = {}
        if value not in self.arg_counts[key]:
            self.arg_counts[key][value] = 0
        return self.arg_counts[key][value]

    def set_arg_count(self, key, value, new_count):
        self.arg_counts[key][value] = new_count

    def increment_arg_count(self, key, value):
        self.set_arg_count(key, value, self.get_arg_count(key, value) + 1)

    def decrement_arg_count(self, key, value):
        self.set_arg_count(key, value, self.get_arg_count(key, value) - 1)

    def get_key_counts(self, key):
        return [
            (v, self.arg_counts[key][v]) for v in self.arg_counts.get(key, {})
        ]

    def parse_arg_string(self, key, value, params):
        if type(value) is str and value.endswith(')'):
            if value.startswith('URL('):
                url_key = value[len('URL('):-1]
                if url_key in params:
                    return params[url_key]
            elif value.startswith('uniform('):
                value_list = [x.strip() for x in
                    value[len('uniform('):-1].split(',')]
                lowest_count = None
                least_common_values = None
                for v in value_list:
                    count = self.get_arg_count(key, v)
                    if lowest_count is None or count < lowest_count:
                        lowest_count = count
                        least_common_values = [v]
                    elif count == lowest_count:
                        least_common_values.append(v)
                return random.choice(least_common_values)
        return value

    def open_session(self, params):
        token = self.get_next_session_token()
        # Resolve session arguments from given params
        session_args = {}
        for key in self.session_args:
            value = self.session_args[key]
            if value is not None:
                value = self.parse_arg_string(key, value, params)
                session_args[key] = value
                self.increment_arg_count(key, value)

        self.log('Opening session', token=token, **session_args)
        experiment_session = ExperimentSession(
            self,
            token,
            self.data_path,
            session_args
        )
        self.sessions[token] = experiment_session
        return experiment_session

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
        self.next_run_id = 1
        self.run = None
        # Permissions
        self.admins = set()
        self.secret_url = None

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

    def start_run(self, **kwargs):
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
            **kwargs
        )
        os.makedirs(run_data_path)
        self.save_metadata()

    def cancel_run(self):
        if not self.is_active():
            raise ValueError()
        self.run.cancel()

    def open_session(self, params):
        if not self.is_active():
            raise ValueError()
        return self.run.open_session(params)

    def on_session_closed(self, session, bulk=False):
        self.server.on_session_closed(self, session, bulk=bulk)

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
        if self.has_secret_url():
            self.server.remove_secret_url_code(self.secret_url)
        self.save_metadata()

    def is_editable_by(self, user):
        return user in self.admins

    def add_admin(self, user):
        self.admins.add(user)

    def remove_admin(self, user):
        self.admins.remove(user)

    def meta_to_json_str(self):
        meta = {}
        meta['admins'] = list(self.admins)
        meta['next_run_id'] = self.next_run_id
        if self.is_active():
            meta['run'] = self.run.to_dict()
        return json.dumps(meta)

    def load_meta_json_str(self, json_str):
        meta = json.loads(json_str)
        self.admins = set(meta.get('admins', []))
        self.next_run_id = meta.get('next_run_id', 1)
        if 'run' in meta:
            self.run = ExperimentRun.from_dict(self, meta['run'])

    def save_metadata(self):
        self.log('Saving metadata')
        self.server.save_study_metadata(self.id)

    def has_secret_url(self):
        return self.secret_url is not None

    def remove_secret_url(self):
        self.secret_url = None

    def set_secret_url(self, code):
        if self.has_secret_url():
            self.server.remove_secret_url_code(self.secret_url)
        self.log('New secret url',code=code)
        self.secret_url = code

    def get_secret_url(self):
        return self.secret_url

    def has_completion_url(self):
        return self.run.completion_url is not None

    def get_completion_url(self):
        return self.run.completion_url

    def has_cancel_url(self):
        return self.run.cancel_url is not None

    def get_cancel_url(self):
        return self.run.cancel_url

    def has_briefing_url(self):
        return self.run.briefing_url is not None

    def get_briefing_url(self):
        return self.run.briefing_url

    def has_debriefing_url(self):
        return self.run.debriefing_url is not None

    def get_debriefing_url(self):
        return self.run.debriefing_url

    def has_session_args(self):
        return len(self.run.session_args.keys()) > 0

    def get_session_args(self):
        return self.run.session_args

    def get_key_value_counts(self, key):
        return self.run.get_key_counts(key)


class ExperimentServer():

    def __init__(self, data_path, study_path, code_generator_fn):
        self.experiments = {}
        self.data_path = data_path
        self.study_path = study_path
        # Participant codes
        self.participant_codes = {}
        # Code generation
        self.code_generator_fn = code_generator_fn
        # HTTP Session to Experiment Session map
        self.user_session_map = {}
        self.session_user_map = {}

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

    def load_server_metadata(self, meta_json):
        if 'participant_codes' in meta_json:
            for props in meta_json['participant_codes']:
                code = props['code']
                study = props['study']
                kwargs = {}
                if props.get('is_secret_url', False):
                    self.get_experiment(study).set_secret_url(code)
                    kwargs['is_secret_url'] = True
                else:
                    kwargs['timeout'] = parse_datestr(props['timeout'])
                    kwargs['unique_session'] = props['unique_session']
                    kwargs['session_limit'] = props['session_limit']
                    kwargs['session_count'] = props.get('session_count', 0)
                self.add_participant_code(study, code=code, **kwargs)

    def save_server_metadata(self):
        metadata = {}
        metadata['participant_codes'] = []
        for code in self.participant_codes:
            props = self.participant_codes[code]
            meta_obj = {
                'study': props['study'],
                'code': code
            }
            if props.get('is_secret_url', False):
                meta_obj['is_secret_url'] = True
            else:
                meta_obj['timeout'] = props['timeout'].isoformat()
                meta_obj['unique_session'] = props['unique_session']
                meta_obj['session_limit'] = props['session_limit']
                meta_obj['session_count'] = props.get('session_count', 0)
            metadata['participant_codes'].append(meta_obj)
        return metadata


    def get_server_metadata_file_path(self):
        return os.path.join(
            self.study_path,
            'server.json'
        )

    def save_server_metadata_file(self):
        self.log('Saving server metadata...')
        with open(self.get_server_metadata_file_path(), 'w') as md:
            md.write(json.dumps(self.save_server_metadata(), indent=2))

    def load_server_metadata_file(self):
        try:
            with open(self.get_server_metadata_file_path()) as md:
                self.load_server_metadata(json.loads(md.read()))
        except FileNotFoundError:
            self.log('nothing to load')

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
            import_study(study, study_files, self.study_path, replace=replace)
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
        self.save_study_metadata(study)

    def delete_study(self, study, delete_data=False):
        log('Removing study "{}"'.format(study), study=study)
        exp = self.experiments[study]
        del self.experiments[study]
        if exp.is_active():
            exp.cancel_run()
        shutil.rmtree(os.path.join(self.study_path, study))
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
            if not os.path.isdir(os.path.join(
                    self.study_path,
                    study)):
                continue
            self.log('Adding "{}"...'.format(study))
            self.add_study(study)
            self.load_study_metadata(study)

        self.log('Loading server metadata...')
        self.load_server_metadata_file()

    def study_available(self, study):
        return study in self.experiments and \
            self.experiments[study].is_active()

    def get_path(self, study):
        return os.path.join(self.study_path, study)

    def get_config(self, study):
        return self.experiments[study].config

    def has_participant_code(self, code):
        return code in self.participant_codes

    def handle_request(self, study, params, user_key):
        exp = self.experiments[study]
        command = params['command']
        exp.log('Request: {}'.format(command))
        response = {}
        token = params.get('token', None)
        session = None
        if token is not None:
            session = exp.get_session(token)
        elif user_key in self.user_session_map:
            session = self.user_session_map[user_key]['session']
            token = session.token

        if command == 'open_session':
            exp.timeout_old_sessions()
            if session is None:
                raise ValueError()
            response['token'] = token
            #TODO: unusued parameters
            # experiment_full_path = params['experimentFullPath']
        elif command == 'close_session':
            #TODO: unusued parameters
            # experiment_full_path = params['experimentFullPath']
            session_completed = params['isCompleted'] == 'true'
            session.set_completed(session_completed)
            session.close()
            url_override = session.get_redirect_url_override()
            if session.run.debriefing_url is not None:
                if url_override is not None:
                    response['url'] = 'debrief?next={}'.format(
                        urllib.parse.quote(url_override)
                    )
                else:
                    response['url'] = 'debrief'
            elif url_override is not None:
                response['url'] = url_override

        elif command == 'save_data':
            #TODO: unusued parameters
            # experiment_full_path = params['experimentFullPath']
            save_format = params['saveFormat']
            key = params['key']
            data = params['value']
            session.accept_data(key, data, save_format)
        return response

    def get_experiments(self):
        return self.experiments.values()

    def get_experiment(self, study):
        return self.experiments[study]

    def add_participant_code(self, study, code=None, **kwargs):
        props = self.code_generator_fn(study, code=code)
        code = props['code']
        self.log('New code',code=code, study=study)
        props.update(kwargs)
        props['sessions'] = set()
        self.participant_codes[code] = props
        return code

    def remove_participant_code(self, code, bulk=False):
        self.log('Removing participant code', code=code)
        props = self.participant_codes[code]
        props['on_remove']()
        if len(props['sessions']) > 0:
            self.log('REMOVED CODE STILL HAD SESSIONS!!',code=code)
        del self.participant_codes[code]
        if not bulk:
            self.save_server_metadata_file()

    # Invite codes - single use access for individual participants
    # most restrictive access mode
    def add_invite_code(self, study, **kwargs):
        self.add_participant_code(
            study,
            unique_session=True,
            **kwargs
        )
        self.save_server_metadata_file()

    # Secret url - level of access between public and participant codes
    # participants can keep accessing the study at the url until it is closed
    def add_secret_url(self, study):
        code = self.add_participant_code(
            study,
            is_secret_url=True
        )
        self.get_experiment(study).set_secret_url(code)
        self.save_server_metadata_file()

    def remove_secret_url_code(self, code):
        props = self.participant_codes[code]
        self.remove_participant_code(code)
        self.get_experiment(props['study']).remove_secret_url()
        self.save_server_metadata_file()

    def on_session_closed(self, experiment, session, bulk=False):
        user_key = self.get_user_for_session(experiment.id, session.token)
        session_obj = self.get_session_for_user(user_key)
        del self.user_session_map[user_key]
        del self.session_user_map[(experiment.id, session.token)]
        # If the user is accessing the server through a participant code,
        # log the session's completion in the code stats
        code = session_obj.get('code')
        if code is not None:
            props = self.participant_codes[code]
            props['sessions'].remove(session.token)
            # Remove the code if it's reached its session limit
            if 'session_limit' in props:
                session_count = props.get('session_count', 0) + 1
                if session_count == props['session_limit']:
                    self.remove_participant_code(code, bulk=bulk)
                else:
                    props['session_count'] = session_count
                    if not bulk:
                        self.save_server_metadata_file()

    def remove_code_and_session(self, code, bulk=False):
        props = self.participant_codes[code]
        exp = self.get_experiment(props['study'])
        for token in list(props['sessions']):
            exp.get_session(token).close(bulk=bulk)
        else:
            self.remove_participant_code(code, bulk=bulk)

    def get_study_for_participant_code(self, code):
        if code not in self.participant_codes:
            raise ValueError()
        props = self.participant_codes[code]
        if 'timeout' in props and \
                datetime.datetime.now() >= props['timeout']:
            self.log('Participant code is expired', code=code)
            self.remove_code_and_session(code)
            raise ValueError()
        return props['study']

    def get_session_for_user(self, user_key):
        return self.user_session_map.get(user_key)

    def get_user_for_session(self, study, token):
        return self.session_user_map.get((study, token))

    def user_has_session(self, user_key):
        return user_key in self.user_session_map

    def close_user_session(self, user_key):
        self.log('Closing existing user session...')
        self.get_session_for_user(user_key)['session'].close()

    def close_user_session_if_exists(self, user_key):
        if self.user_has_session(user_key):
            self.log('Closing existing session for user')
            self.get_session_for_user(user_key)['session'].close()

    def start_session_for_user(self, study, user_key, params, code=None):
        session = self.get_experiment(study).open_session(params)
        self.user_session_map[user_key] = {
            'study': study,
            'session': session,
            'code': code
        }
        self.session_user_map[(study, session.token)] = user_key
        if code is not None:
            self.participant_codes[code]['sessions'].add(session.token)

    def activate_participant_code(self, code, params, user_key):
        props = self.participant_codes[code]
        study = props['study']
        exp = self.experiments[study]
        self.log('Participant code accessed', code=code)
        if not self.user_has_session(user_key):
            self.start_session_for_user(study, user_key, params, code)

    def get_participant_codes(self, study):
        codes = []
        for code in self.participant_codes:
            props = self.participant_codes[code]
            if 'unique_session' not in props:
                continue
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
                self.participant_codes[code]['study'] == study and
                self.participant_codes[code].get('unique_session', False)
        ]
        for code in target_codes:
            self.remove_code_and_session(code, bulk=True)
        self.save_server_metadata_file()
