#!/usr/bin/env bash

mkdir -p ./dist
zip -r -FS ./dist/jpdb-search-on-paste.xpi ./* --exclude ./README.md ./.gitignore ./build.sh ./dist/
