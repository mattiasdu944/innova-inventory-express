FROM node:18.17.1-alpine3.18

WORKDIR /app

COPY app.js package*.json ./
COPY . .

RUN yarn install

CMD ["yarn","start"]