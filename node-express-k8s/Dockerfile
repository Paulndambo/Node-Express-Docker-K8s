FROM node:alpine

WORKDIR /app
EXPOSE 5000

COPY package.json package-lock.json ./
RUN npm install

COPY . /app/

CMD ["npm", "start"]