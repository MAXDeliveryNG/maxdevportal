FROM mhart/alpine-node:8.14

RUN apk add --no-cache bash

RUN mkdir -p /home/devportal

WORKDIR /home/devportal
COPY package.json /home/devportal
COPY ./ /home/devportal

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && yarn install \
    && apk del build-dependencies

RUN npm install pm2 -g

EXPOSE 6010

CMD [ "pm2-runtime", "process.yml" ]