FROM node:22 AS builder

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8080

CMD ["npm","run", "dev", "-p" "8080"]
