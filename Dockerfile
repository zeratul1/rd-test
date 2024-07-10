FROM node:20

WORKDIR /usr/src/app

ENV RD_MODE=DEV

COPY ./keys ./keys
COPY . .

RUN --mount=type=cache,target=/root/.npm npm install
