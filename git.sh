#!/bin/sh
if [ $# -ne 1 ]
then
	echo "usage: $1 " 1>&2
	exit 1
fi
git add .
git commit -m $1
git push master
git push upstream
