FROM node:10-alpine

WORKDIR /usr/src/app

ENV FIX_DIR /usr/src/app

COPY package.json .

RUN npm install

COPY dist .

COPY server.js .
CMD node server.js
