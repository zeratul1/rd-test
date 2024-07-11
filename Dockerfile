FROM node:20

ENV RD_MODE=DEV

VOLUME /usr/src/app/keys
WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm npm ci

COPY . .
