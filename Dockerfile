ARG ENV=dev

FROM node:12-alpine as builder

ARG ENV

WORKDIR /tmp
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json

RUN npm ci

ADD . .

RUN npm run build:ssr:$ENV

FROM node:12-alpine

ARG ENV
ENV ENV=$ENV

WORKDIR /tmp

ADD package.json ./package.json
COPY --from=builder /tmp/dist /tmp/dist

EXPOSE 80

ENTRYPOINT npm run serve:ssr
