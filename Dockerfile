FROM node:20

ENV RD_MODE=DEV

VOLUME /usr/src/app/keys
WORKDIR /usr/src/app

COPY . .

RUN --mount=type=cache,target=/root/.npm npm install
