FROM node:18.17.1-alpine3.18

WORKDIR /app

COPY app.js package.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn","start"]