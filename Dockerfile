FROM node:16-alpine
WORKDIR /ms-notification
COPY . .
RUN npm i
CMD ["node", "src/main.ts"]
RUN npm run build
RUN npm run start
EXPOSE 3000