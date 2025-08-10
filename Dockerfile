# Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (cache layer)
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose dev server port
EXPOSE 3000

# Run in development mode
CMD ["npm", "run", "dev"]
