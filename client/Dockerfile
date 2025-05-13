# syntax=docker/dockerfile:1

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose Vite dev server port (default is 5173)
EXPOSE 5173

# Run the dev server
CMD ["npm", "run", "dev", "--", "--host"]
