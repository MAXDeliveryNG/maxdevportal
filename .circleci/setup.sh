#!/bin/bash
git remote add production git@developers.max.ng:~/
git remote add staging git@devs-staging.max.ng:~/

# Add analytics.max.ng to the list of known hosts
ssh-keyscan -H developers.max.ng >> ~/.ssh/known_hosts
ssh-keyscan -H devs-staging.max.ng >> ~/.ssh/known_hosts