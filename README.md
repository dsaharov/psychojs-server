**PsychoJS Server**

Imports and serves PsychoPy experiments exported as html.

Requires: Python 3 with libraries Flask and Waitress installed.

**import.sh** *[path] [experiment name] [--replace]* - Given a path to the /html/ folder of an exported experiment, this script will copy it to the server and make some compatability changes. Experiment name should have no spaces or special characters, and be unique.

Specifying *--replace* will remove any existing study with the given name, replacing it with the new study.

The imported experiment will be reachable at localhost:8080/study/\<name\>/

**To start the server** run serve.py. If you need to change the server port, edit this file.
