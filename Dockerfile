FROM node:18
ARG CACHE_VER=3

RUN npm install -g nodemon
WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm install

COPY app/. .

EXPOSE 8080
CMD [ "nodemon", "server.js" ]