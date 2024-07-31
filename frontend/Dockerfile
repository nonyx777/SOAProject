FROM node:18

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install

RUN npm install axios

RUN npm install -g serve
COPY ./ .

RUN npm run build

EXPOSE 5173

CMD ["serve", "-s", "dist", "-p", "5173"]