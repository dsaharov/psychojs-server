from collections import defaultdict
from datetime import datetime, timedelta
from flask import session
import json

class Lockout(Exception):
    pass

# WARNING: this is a homebrew authentication scheme
# that may not be sufficient for apps exposed to the internet
class SimpleSessionAuth():

    def __init__(self,
            users,
            timeout_attempts=None,
            timeout_duration=timedelta(minutes=10)):
        self.session_keys = set()
        self.users = users
        self.timeout_attempts = defaultdict(int)
        self.timeout_duration = timeout_duration
        self.max_attempts = timeout_attempts
        self.timeouts = {}

    def add_auth(self, user):
        key = json.dumps({
            'user': user,
            'time': str(datetime.now())
        })
        self.session_keys.add(key)
        session['auth'] = key
        return key

    def revoke_auth(self, key):
        if key is not None:
            self.session_keys.remove(key)
            session.pop('auth', None)

    def get_session_auth(self):
        return session.get('auth', None)

    def revoke_session_auth(self):
        self.revoke_auth(self.get_session_auth())

    def is_session_authenticated(self):
        key = self.get_session_auth()
        if key is not None and key not in self.session_keys:
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
        return json.loads(self.get_session_auth())['user']
