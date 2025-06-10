# Use a smaller base image for the builder stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for the runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Set the environment variable
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["npx", "serve", "-s", "dist", "-l", "5173"]