# Use Node.js 18 as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application port (for frontend)
EXPOSE 3000

# Set the default command for development (e.g., for Next.js or React)
CMD ["npm", "run", "dev"]
