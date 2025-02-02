# Use a base image for Node.js
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY server/package.json server/package-lock.json ./
RUN npm install --production

# Copy the entire server and client folders
COPY server ./server
COPY client ./client

# Expose the port
EXPOSE 2589

# Start the application
CMD ["node", "server/server.js"]
