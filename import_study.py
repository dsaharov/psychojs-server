import sys
import os
import shutil
import glob
from logger import log

def import_js(study_name, study_files, study_path):
    log('Copying js', study=study_name)
    js_file_path = None
    for f in study_files:
        #TODO: the transpiled js file is hard to deal with; omit it for now
        # we should probably generate our own, anyway
        if 'NoModule' in f['name']:
            continue
        if any(f['name'].endswith(x) for x in ['js']):
            path = os.path.join(study_path, 'exp.js')
            # Copy the file, making compatability changes in the process
            with open(f['full_path'], encoding='utf-8') as source_file:
                file_contents = source_file.read()
            with open(path, 'w', encoding='utf-8') as dest_file:
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


def import_resources(study_name, study_files, js_file_path, study_path):
    # Copy the uploaded study resources and make them available in the study
    log('Copying resources', study=study_name)
    os.makedirs(os.path.join(study_path, 'resources'))
    resources = []
    for f in study_files:
        if not f['name'].startswith('resources_'):
            continue
        extension = ''
        idx = f['name'].rfind('.')
        if idx > -1:
            extension = f['name'][idx:]
        resource_path = 'resources/{}{}'.format(len(resources),extension)
        shutil.copy(
            f['full_path'], os.path.join(study_path, resource_path))
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
    with open(js_file_path, encoding='utf-8') as f:
        contents = f.read()
    with open(js_file_path, 'w', encoding='utf-8') as f:
        f.write(contents.replace('psychoJS.start({expName, expInfo});', resource_str, 1))

def import_study(study_name, study_files, path_root, replace=False):
    study_path = os.path.join(path_root, study_name)
    if os.path.exists(study_path):
        if not replace:
            raise ValueError('Study already exists')
        log('Removing current files', study=study_name)
        shutil.rmtree(study_path)
    os.makedirs(study_path)
    js_file_path = import_js(study_name, study_files, study_path)
    import_resources(study_name, study_files, js_file_path, study_path)
