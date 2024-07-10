FROM node:20

WORKDIR /usr/src/app

COPY ./keys ./keys
COPY . .

RUN --mount=type=cache,target=/root/.npm npm install
