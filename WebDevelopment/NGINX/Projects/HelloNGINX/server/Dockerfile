# Specify a base image configuration
FROM node:16

# Create app directory by specifying working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source by copying everything from the current directory to the container
COPY . .

# Expose the ports
EXPOSE 1111
EXPOSE 2222
EXPOSE 3333
EXPOSE 4444

# Start the server
CMD ["node", "index.js"]