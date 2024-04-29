FROM node


WORKDIR /app
# Set environment variables
ENV NEXT_PUBLIC_API_URL=https://chzcolinabackend.azurewebsites.net/
ENV WATCHPACK_POLLING=true

COPY package*.json ./



RUN npm install next

RUN npm install

COPY . .

EXPOSE 3001

CMD npm run dev