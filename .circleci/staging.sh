#! /usr/bin/env bash
# staging deployment script

yarn install

yarn run build:staging

yarn start
