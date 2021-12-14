#! /bin/bash
if [ ! -d "./dist" ]; then
    echo "./dist 目录不存在"
    exit 1
fi

if [ ! -d "../dist" ]; then
    mkdir "../dist"
fi

if [  -d "../dist/demo" ]; then
    rm -rf "../dist/demo"
fi


mv -f ./dist ../dist/demo/