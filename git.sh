#!/bin/sh
git add .
git commit -m $1
git push develop
git push --set-upstream origin develop
