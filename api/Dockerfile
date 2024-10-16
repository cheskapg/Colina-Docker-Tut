# Use the official Node.js image as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /src
ENV JWT_SECRET="pogiko123"
ENV DB_TYPE="postgres"
ENV PGHOST=colinadb.postgres.database.azure.com
ENV PGUSER=colina
ENV PGPORT=5432
ENV PGDATABASE=colina
ENV PGPASSWORD="jajnav5@" 
ENV DB_SYNCHRONIZE=true
ENV DB_LOGGING=true
ENV FE_URL ="http://localhost:3001"
ENV NEXT_USER="kentjohnliloc@gmail.com"
ENV NEXT_PASS="sxmv fvef qmoj llzc"

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Set the command to run the Next.js application
CMD ["npm", "start"]