# !/bin/bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
cd /www/wwwroot/rmhai
git checkout develop
git pull origin develop
yarn install