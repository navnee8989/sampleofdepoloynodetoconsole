# Use Node.js as base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for efficient caching)
COPY server/package.json server/package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Copy the entire server and client folders
COPY server ./server
COPY client ../client

# Expose the server port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
