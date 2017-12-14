#! /usr/bin/env bash
# production deployment script
yarn install

./node_modules/.bin/ng build --prod --env=prod

yarn start