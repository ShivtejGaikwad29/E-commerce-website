# Use Node.js image to build the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server (Nginx) to serve the app
FROM nginx:alpine

# Copy built files from the previous stage to the web server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
