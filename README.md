# Lab3 Docker

## Description

This project is a simple Node.js application containerized with Docker. The application generates a random array of phone models, sorts them alphabetically, and displays them on a local web page.

## Build and Run

Follow these steps to build and run the application using Docker:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/VadimOpt/Lab3_Docker.git
    cd Lab3_Docker
    ```

2. **Build the Docker image**:

    ```sh
    docker build -t my-optimized-docker-app .
    ```

3. **Run the Docker container**:

    ```sh
    docker run -p 3000:3000 my-optimized-docker-app
    ```

The application will be accessible at `http://localhost:3000`.

## Usage

Once the application is running, you can visit the following endpoints:

- **`/`**: Displays a greeting message old(app.js).
- **`/phones`**: Generates a random array of phone models, sorts them alphabetically, and displays both arrays.

### Example

After running the container, open your web browser and navigate to `http://localhost:3000/phones` to see the random and sorted phone models.

## Dockerfile Optimization

The Dockerfile for this project has been optimized to reduce the image size and improve build performance using multi-stage builds and a smaller base image (Alpine Linux).

### Dockerfile

```Dockerfile
# Stage 1: Build
FROM node:14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Create final image
FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

EXPOSE 3000
CMD ["node", "app.js"]
