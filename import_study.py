import sys
import os
import shutil
import glob
from logger import log

def import_js(study_name, study_files):
    log('Copying js for study "{}"'.format(study_name))
    js_file_path = None
    for f in study_files:
        #TODO: the transpiled js file is hard to deal with; omit it for now
        # we should probably generate our own, anyway
        if 'NoModule' in f['name']:
            continue
        if any(f['name'].endswith(x) for x in ['html', 'js']):
            path = os.path.join('study',study_name,f['name'])
            # Copy the file, making compatability changes in the process
            with open(f['full_path']) as source_file:
                file_contents = source_file.read()
            with open(path, 'w') as dest_file:
                dest_file.write(
                    file_contents.replace(
                        'https://lib.pavlovia.org/psychojs.css',
                        './css/psychojs.css'
                    ).replace(
                        'https://pavlovia.org/lib/',
                        './js/'
                    ).replace(
                        'https://lib.pavlovia.org/',
                        './js/'
                    ).replace(
                        'debug: true',
                        'debug: false'
                    )
                )
        #TODO: HACK; for simplicity we assume there is only one js file
        if f['name'].endswith('js'):
            js_file_path = path
    return js_file_path


def import_resources(study_name, study_files, js_file_path):
    # Copy the uploaded study resources and make them available in the study
    log('Copying resources for study "{}"'.format(study_name))
    os.makedirs(os.path.join('study', study_name, 'resources'))
    resources = []
    for f in study_files:
        if not f['name'].startswith('resources_'):
            continue
        resource_path = 'resources/{}'.format(f['name'][len('resources_'):])
        shutil.copy(
            f['full_path'], os.path.join('study', study_name, resource_path))
        resources.append(
            '{}name: "{}", path: "{}"{}'.format(
                '{',
                f['path'][len('html/resources/'):],
                resource_path,
                '}'
            )
        )

    resource_str = """
let resources = [
{}
];
psychoJS.start({}expName, expInfo, resources{});
    """.format(
        ',\n'.join(resources),
        '{',
        '}'
    )
    with open(js_file_path) as f:
        contents = f.read()
    with open(js_file_path, 'w') as f:
        f.write(contents.replace('psychoJS.start({expName, expInfo});', resource_str, 1))

def import_study(study_name, study_files, replace=False):
    study_path = os.path.join('study', study_name)
    if os.path.exists(study_path):
        if not replace:
            raise ValueError('Study already exists')
        log('Removing old version of "{}"'.format(study_name))
        shutil.rmtree(study_path)
    os.makedirs(study_path)
    js_file_path = import_js(study_name, study_files)
    import_resources(study_name, study_files, js_file_path)