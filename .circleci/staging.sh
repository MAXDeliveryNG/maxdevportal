#! /usr/bin/env bash
# staging deployment script

yarn install

./node_modules/.bin/ng build --prod --env=staging

yarn start
