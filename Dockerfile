FROM node:alpine
EXPOSE 3000

RUN mkdir /app
WORKDIR /app

RUN npm init -y
RUN npm i app-root-path cors express

COPY dist /app/dist
COPY server /app/server
COPY ssl /app/ssl

CMD ["node", "server/server.mjs"]
