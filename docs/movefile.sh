#! /bin/bash
if [ ! -d "./.vitepress/dist" ]; then
  echo "./.vitepress/dist 目录不存在"
  exit 1
fi

for name in $(find ./.vitepress/dist);
do
    if [ -d "$name" ]
    then 
        echo "$name 是一个目录"
    elif [ -f "$name" ]
    then
        cp $name ../dist/docs/
    fi 
done


# mv ./.vitepress/dist ../dist/docs/