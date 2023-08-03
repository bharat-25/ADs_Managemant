# Use the official Node.js image as the base image
FROM node:18-alpine

# FROM node:18.16.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT = 3008

EXPOSE 3008

CMD [ "npm","start"]