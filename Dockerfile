FROM node:14.18.1

WORKDIR /app

RUN [ "npm", "install", "pm2@5.1.2", "-g" ]

COPY package-lock.json ./
COPY package.json ./
COPY ecosystem.config.js ./

COPY ./src ./src

RUN [ "npm", "i" ]
EXPOSE 3000/tcp
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "production" ]