FROM node

WORKDIR /app

# Set environment variables
ENV JWT_SECRET="pogiko123"
ENV DB_TYPE="postgres"
# ENV DB_HOST="localhost"
# ENV DB_PORT=5432
# ENV DB_USERNAME="postgres"
# ENV DB_PASSWORD="postgres"
# ENV DB_DATABASE="ColinaHealth_db"
ENV PGHOST=colinadb.postgres.database.azure.com
ENV PGUSER=colina
ENV PGPORT=5432
ENV PGDATABASE=colina
ENV PGPASSWORD="jajnav5@" 
ENV DB_SYNCHRONIZE=true
ENV DB_LOGGING=true
ENV FE_URL="https://chzcolinahealthwebsite.azurewebsites.net"

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start:dev"]
