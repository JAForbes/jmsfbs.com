FROM node:16.18.1-alpine3.16 as build

WORKDIR /app

COPY package.json .

RUN npm install

ADD https://cohost.org/jmsfbs/rss/public.json ./static/feed/cohost.json

ADD static static
ADD src src
ADD .svelte-kit .svelte-kit
COPY svelte.config.js tsconfig.json vite.config.ts ./

RUN npm run build

FROM caddy:2.6.2-alpine as serve
COPY --from=build /app/build /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile
EXPOSE 80