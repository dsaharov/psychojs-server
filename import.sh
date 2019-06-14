#!/usr/bin/env bash
set -euxo pipefail
mkdir study || true
mkdir ./study/$2/
cd study/$2
cp -r $1/* .
find ./*.* | xargs -L 1 sed -i -e 's/https:\/\/lib.pavlovia.org\/psychojs.css/.\/css\/psychojs.css/g'
find ./*.* | xargs -L 1 sed -i -e 's/https:\/\/pavlovia\.org\/lib\//\.\/js\//g'
find ./*.* | xargs -L 1 sed -i -e 's/https:\/\/lib\.pavlovia\.org\//\.\/js\//g'
find ./*.* | xargs -L 1 sed -i -e 's/debug: true/debug: false/g'
find ./*.js | xargs -L 1 -I {} bash -c "find resources/* | xargs ../../add_resources.py resources/ {}"
