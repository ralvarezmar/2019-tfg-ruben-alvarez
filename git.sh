#!/bin/sh
if [ $# -gt 2 ]
then
	echo "usage: $1 " 1>&2
	exit 1
fi
git add .
git commit -m $1
git push 
if [ $2 = "-t" ]
then
	git push upstream
fi
