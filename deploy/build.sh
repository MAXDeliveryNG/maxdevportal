#!/bin/bash
# Build script for docker image

# ACR variables
USERNAME=${REGISTRY_USER}
PASSWORD=${REGISTRY_PASSWORD}
BRANCH=${DEPLOY_BRANCH}
LOGIN_SERVER=${REGISTRY_HOST}

# Image variables
NAME=max/devportal
# Image tag
TAG=$(git log -1 --pretty=%h)
IMG=${NAME}:${TAG}
LATEST=${NAME}:${BRANCH}

# Login
echo 'Logging in to Docker registry'

docker login --username $USERNAME --password $PASSWORD $LOGIN_SERVER

echo 'Building image'

docker build -t $IMG .

echo 'Tagging image'

docker tag $IMG $LOGIN_SERVER/$LATEST

echo 'Pushing image to Docker registry'

docker push ${LOGIN_SERVER}/${NAME}

echo ${NAME} pushed to ${LOGIN_SERVER}/${LATEST}