import datetime

def log(str, **kwargs):
    tags = [datetime.datetime.now()]
    for key in kwargs:
        tags.append('{}: {}'.format(
            key, kwargs[key]
        ))
    print('{} {}'.format(
        ''.join('[{}]'.format(x) for x in tags),
        str
    ))
