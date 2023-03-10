FROM node:alpine
EXPOSE 3000

RUN mkdir /app
WORKDIR /app

RUN npm init -y
RUN npm i express cors

COPY dist /app/dist
COPY server /app/server

CMD ["node", "server/server.mjs"]
