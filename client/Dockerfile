<<<<<<< HEAD
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
=======
# Use the official Node.js image as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app
ENV NEXT_PUBLIC_API_URL=http://localhost:3000
ENV NEXT_PUBLIC_REMEMBER_TIME='30d'
ENV NEXT_PUBLIC_IDLE_TIMEOUT=28800000 
ENV next_user="kentjohnliloc@gmail.com"
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
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
