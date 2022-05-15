FROM node:12-alpine as builder

ARG ENV=prod

WORKDIR /tmp
ADD package.json ./package.json

RUN npm ci

ADD . .

RUN npm run build -- --configuration=$ENV --output-path=dist

FROM nginx:1.17.2-alpine

COPY --from=builder /tmp/dist /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
