docker push <your-dockerhub-username>/<image-name>
# Stage 1: Build the application
FROM oven/bun:1.1.17 as builder

WORKDIR /app

# Copy package.json and bun.lockb and install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Stage 2: Serve the built application
FROM oven/bun:1.1.17 as runner

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Install a simple static file server
RUN bun install -g serve

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "5173"]