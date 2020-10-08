FROM node:12.19.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN YARN_CACHE_FOLDER=/dev/shm/yarn_cache yarn --production

COPY dist /usr/src/app/dist
COPY public /usr/src/app/public

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]
