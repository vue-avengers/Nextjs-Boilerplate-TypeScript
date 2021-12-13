FROM node:16.6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package.json yarn.lock /usr/src/app/
RUN YARN_CACHE_FOLDER=/dev/shm/yarn_cache yarn --production

COPY .next /usr/src/app/.next
COPY out /usr/src/app/out
COPY public /usr/src/app/public

EXPOSE 3000

USER node

RUN yarn install && yarn build

CMD [ "yarn", "start" ]
