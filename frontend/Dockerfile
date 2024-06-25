# Use an official Node runtime as a parent image
FROM node:14-alpine

# Install necessary system dependencies
RUN apk update && apk add bash git openssh

# Install Expo CLI globally
RUN npm install -g expo-cli

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Expo project (for production)
#RUN expo build:web

# Expose the port (if necessary, depending on your setup)
EXPOSE 80

# Command to run the production build (if serving with Node.js)
CMD ["npm", "run", "web"]

# Or, if serving with a web server like Nginx:
# Example for serving with Nginx:
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
