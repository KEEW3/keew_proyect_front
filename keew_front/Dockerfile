FROM node:20.8 AS BUILD_IMAGE
WORKDIR /app

COPY package.json .
COPY vite.config.js .


RUN npm install

COPY . .

RUN npm run build

#COPY --from=BUILD_IMAGE /app/dist /app/dist
EXPOSE 8080

CMD [ "npm", "run", "preview" ]

