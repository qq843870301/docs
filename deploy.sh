#!/usr/bin/env sh

success="更新成功"

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./dist

# 回到之前的文件目录
cd -
