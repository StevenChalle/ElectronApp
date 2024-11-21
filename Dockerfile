# Base
FROM node:20 as base

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
