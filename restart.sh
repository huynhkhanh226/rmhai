# !/bin/bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
cd /www/wwwroot/rmhai
git checkout develop
nvm use v20.8.0
yarn install
git pull origin develop