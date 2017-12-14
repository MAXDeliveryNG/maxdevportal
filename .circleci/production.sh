#! /usr/bin/env bash
# production deployment script
yarn install

yarn run build:staging

yarn start