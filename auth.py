from collections import defaultdict
from datetime import datetime, timedelta
from flask import session
import json
import secrets

class Lockout(Exception):
    pass

# WARNING: this is a homebrew authentication scheme
# that may not be sufficient for apps exposed to the internet
class SimpleSessionAuth():

    def __init__(self,
            users,
            timeout_attempts=None,
            timeout_duration=timedelta(minutes=10)):
        self.sessions = {}
        self.users = users
        self.user_sessions = defaultdict(set)
        self.timeout_attempts = defaultdict(int)
        self.timeout_duration = timeout_duration
        self.max_attempts = timeout_attempts
        self.timeouts = {}
        # Randomly pick an auth key variable name
        self.auth_name = secrets.token_urlsafe()

    def add_auth(self, user):
        key = secrets.token_urlsafe()
        #TODO: store login time & track expiry
        #TODO: store login IP
        self.sessions[key] = {
            'user': user
        }
        self.sessions[key].update(self.users[user].get('permissions', {}))
        self.user_sessions[user].add(key)
        session[self.auth_name] = key
        return key

    def revoke_auth(self, key):
        if key is not None:
            # remove key from list of sessions logged into user
            self.user_sessions[self.sessions[key]['user']].remove(key)
            del self.sessions[key]
            session.pop(self.auth_name, None)

    def get_session_key(self):
        return session.get(self.auth_name, None)

    def revoke_session_key(self):
        self.revoke_auth(self.get_session_key())

    def is_session_authenticated(self, permission_fn=None):
        key = self.get_session_key()
        if key is not None and key not in self.sessions:
            self.revoke_auth(key)
            key = None
        if key is None:
            return False
        if permission_fn is None:
            return True
        auth = self.sessions[key]
        return permission_fn(auth)

    def user_can_login(self, user):
        if user not in self.users:
            return False
        if 'password' not in self.users[user]:
            return False
        if user in self.timeouts:
            if datetime.now() - self.timeouts[user] > self.timeout_duration:
                del self.timeouts[user]
            else:
                return False
        return True

    def check_add_auth(self, user):
        if user not in self.users:
            return False
        self.add_auth(user)
        return True

    def authenticate(self, user, password):
        # Log out if logged in
        self.revoke_session_key()
        # Check if the user account exists and is not locked
        if not self.user_can_login(user):
            return False
        if self.users[user]['password'] == password:
            self.add_auth(user)
            if self.max_attempts is not None:
                self.timeout_attempts[user] = 0
            return True
        if self.max_attempts is not None:
            self.timeout_attempts[user] += 1
            if self.timeout_attempts[user] == self.max_attempts:
                self.timeouts[user] = datetime.now()
                self.timeout_attempts[user] = 0
                raise Lockout()

        return False

    def get_auth(self):
        return self.sessions[self.get_session_key()]

    def get_authed_user(self):
        try:
            return self.get_auth()['user']
        except:
            return None

    def create_user(self, name, properties=None):
        if name in self.users:
            raise ValueError('User already exists')
        self.users[name] = {}
        if properties is not None:
            self.users[name].update(properties)
        self.users[name]['created_time'] = datetime.now()

    def create_temporary_user(
            self, name=None, properties=None, readable_name=False, name_bytes=16):
        if name in self.users:
            raise ValueError('User already exists')
        while name is None or name in self.users:
            if readable_name:
                name = secrets.token_hex(name_bytes)
            else:
                name = secrets.token_urlsafe(name_bytes)
        props = {}
        if properties is not None:
            props.update(properties)
        self.create_user(name, properties=props)
        return name

    def delete_user(self, user):
        if user not in self.users:
            raise ValueError('User does not exist')
        # revoke_auth changes size of the user sessions list;
        # iterate over a copy instead
        for key in list(self.user_sessions[user]):
            self.revoke_auth(key)
        del self.users[user]
        del self.user_sessions[user]
