FROM node:18.12.1

WORKDIR /urs/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build