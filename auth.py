from flask import session
from datetime import datetime
import json

# WARNING: this is a homebrew authentication scheme
# that may not be sufficient for apps exposed to the internet
class SimpleSessionAuth():

    def __init__(self, users):
        self.session_keys = set()
        self.users = users

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
        if user in self.users and self.users[user] == passwd:
            self.add_auth(user)
            return True
        return False

    def get_authed_user(self):
        return json.loads(self.get_session_auth())['user']
