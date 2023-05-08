FROM node:19-alpine3.16

RUN mkdir -p /usr/src/resume

WORKDIR /usr/src/resume

COPY . /usr/src/resume

RUN yarn install

RUN yarn run build

EXPOSE 1988

CMD ["yarn", "serve"]