# Online Shopping App

Practice Repository for Docker: Single-Stage Build, Multi-Stage Build, and Docker Compose

This repository provides a simple Node.js application designed to help learners practice Docker fundamentals. It includes examples of:

- Single-stage Docker builds
- Multi-stage Docker builds
- Docker Compose service definitions
- Also for Jenkins or CI/CD (if you want)

Use this project to experiment with containerization workflows, image optimization, and container orchestration basics.

---

## Prerequisites

Before starting, ensure you have the following installed:

- Docker Engine
- Docker Compose v2+
- Node.js (optional, only needed if running the app outside Docker)

---

## 1. Single-Stage Docker Build

Simple Dockerfile to build and run the application in a single layer stack.

### Dockerfile (Single Build)

```dockerfile
FROM node:18 AS builder

WORKDIR /app

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["npm","run","dev"]
```

### Build and Run

```bash
docker build -t online-shopping-app .
docker run -p 3000:3000 online-shopping-app
```

---

## 2. Multi-Stage Docker Build

Multi-stage builds help reduce the final image size by separating the build and runtime environments.

### Dockerfile (Multi-Stage Build)

```dockerfile
# stage 1 (bigger base image)
FROM node:18 AS builder

WORKDIR /app

COPY . ./

RUN npm install

# stage 2 (small image)
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm","run","dev"]
```

### Build and Run

```bash
docker build -t online-shopping-app:slim .
docker run -p 3000:3000 online-shopping-app:slim
```

---

## 3. Docker Compose Setup

This configuration runs the application using Docker Compose, simplifying orchestration.

### docker-compose.yml

```yaml
version: "3.9"

services:
  shopping-app:
    build:
      context: ./
    container_name: shopping-app
    ports:
      - "3000:3000"
```

### Start with Docker Compose

```bash
docker compose up --build
```

### To stop:

```bash
docker compose down
```

---

## Accessing the App

Once the container is running, open:

```text
http://localhost:3000
```

---

## Summary

This project enables hands-on learning of:

- Single-stage Docker images
- Layer-optimized multi-stage builds
- Container orchestration with Docker Compose

Use these examples to deepen your understanding of Docker image design and environment management.
