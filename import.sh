#!/usr/bin/env bash
set -euxo pipefail
cp -r $1/* ./
mkdir study || true
mkdir resources || true
mv index.html $2.html
mv ./*.js ./study/
mv ./*.html ./study/
find ./study/* | xargs -L 1 sed -i -e 's/https:\/\/lib.pavlovia.org\/psychojs.css/.\/css\/psychojs.css/g'
find ./study/* | xargs -L 1 sed -i -e 's/https:\/\/pavlovia\.org\/lib\//\.\/js\//g'
find ./study/* | xargs -L 1 sed -i -e 's/https:\/\/lib\.pavlovia\.org\//\.\/js\//g'
find ./study/* | xargs -L 1 sed -i -e 's/debug: true/debug: false/g'
find study/*.js | xargs -L 1 -I {} bash -c "find resources/* | xargs ./add_resources.py resources/ {}"
