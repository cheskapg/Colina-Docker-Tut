FROM node


WORKDIR /app

COPY package*.json ./

# RUN npm ci

RUN npm install


COPY . .

EXPOSE 3000

RUN npm run build


CMD ["npm", "run", "start:dev"]

