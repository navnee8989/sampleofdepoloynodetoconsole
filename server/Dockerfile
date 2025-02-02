# Use an official Node.js runtime (LTS version) as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app will run on
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "start"]