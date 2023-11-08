# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the rest of the application files to the container
COPY . .

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

#This is the expose instruction
EXPOSE 5000

# Set the command to start the app
CMD [ "node", "index.js" ]