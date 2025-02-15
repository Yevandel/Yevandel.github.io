@echo off
set msg=%1
git add .
git commit -m "update: %msg%"
git push origin source
hexo clean && hexo g && hexo d