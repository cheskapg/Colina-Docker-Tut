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
ENV FE_URL1 ="https://chzcolinahealthwebsite.azurewebsites.net"
ENV FE_URL2 ="https://colinahealth.azurewebsites.net/"
ENV NEXT_USER="destrada@jairosolutions.com"
ENV NEXT_PASS="sadk vadn orma vyyl"

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start:dev"]
