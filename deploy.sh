#!/usr/bin/env sh

success="更新成功"

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./dist


git init
git add -A
git commit -m 'deploy'

# 自己的仓库地址，blog这个仓库名称和config.js里的base:/blog/保持一致
git push -f git@github.com:qq843870301/qq843870301.github.io.git master
echo $success;

# 回到之前的文件目录
cd -
