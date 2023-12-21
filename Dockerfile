FROM node:18.18.2 as deps

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --prod

FROM node:18.18.2 as build

ARG DATOCMS_API_KEY
ARG PUBLIC_WEB_URL
ARG RECAPTCHA_SITE_KEY

ENV DATOCMS_API_KEY=${DATOCMS_API_KEY}
ENV PUBLIC_WEB_URL=${PUBLIC_WEB_URL}
ENV RECAPTCHA_SITE_KEY=${RECAPTCHA_SITE_KEY}

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build
RUN yarn sitemap

FROM node:18.18.2-slim

WORKDIR /usr/src/app

COPY server ./server
COPY --link --from=build /usr/src/app/dist ./dist
COPY --link --from=deps /usr/src/app/node_modules ./node_modules

CMD [ "node", "server/index.mjs" ]