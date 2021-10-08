#! /bin/bash
if [ ! -d "./.vitepress/dist" ]; then
    echo "./.vitepress/dist 目录不存在"
    exit 1
fi

if [ ! -d "../dist" ]; then
    mkdir "../dist"
fi

if [  -d "../dist/docs" ]; then
    rm -rf "../dist/docs"
fi


mv -f ./.vitepress/dist ../dist/docs/