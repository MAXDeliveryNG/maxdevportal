#! /usr/bin/env bash
# staging deployment script

yarn install

ng build --prod --env=staging

yarn start
