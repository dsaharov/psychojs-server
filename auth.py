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
        session[self.auth_name] = key
        return key

    def revoke_auth(self, key):
        if key is not None:
            del self.sessions[key]
            session.pop(self.auth_name, None)

    def get_session_key(self):
        return session.get(self.auth_name, None)

    def revoke_session_key(self):
        self.revoke_auth(self.get_session_key())

    def is_session_authenticated(self):
        key = self.get_session_key()
        if key is not None and key not in self.sessions:
            self.revoke_auth(key)
            key = None
        return key is not None

    def authenticate(self, user, passwd):
        if user in self.timeouts:
            if datetime.now() - self.timeouts[user] > self.timeout_duration:
                del self.timeouts[user]
            else:
                return False
        if user in self.users and self.users[user] == passwd:
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

    def get_authed_user(self):
        return self.sessions[self.get_session_key()]['user']
