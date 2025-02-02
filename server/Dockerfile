# Use Node.js as base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Copy the entire server folder content to the working directory
COPY . .

# Copy the client folder to a sibling directory
COPY ../client /usr/src/client

# Expose the server port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]