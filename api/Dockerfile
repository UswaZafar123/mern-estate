# syntax=docker/dockerfile:1

# Use lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Run the Vite dev server
CMD ["npm", "run", "dev"]
