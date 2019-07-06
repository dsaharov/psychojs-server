import datetime

def log(str):
    print('[{}] {}'.format(
        datetime.datetime.now(),
        str
    ))
