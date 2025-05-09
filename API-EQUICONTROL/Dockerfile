FROM node:22.15.0-alpine3.21

WORKDIR /usr/src/api

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]