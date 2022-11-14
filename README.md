<h1 align="center">Personal Finances App - Node.js</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=18.12.0&color=7159c1&style=plastic" />  
  <img src="https://img.shields.io/static/v1?label=typescript&message=4.8.4&color=7159c1&style=plastic" />
  <img src="https://img.shields.io/static/v1?label=docker&message=20.10.21&color=7159c1&style=plastic" />
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=00e200&style=plastic" />
</p>


## Setup instructions to run with Docker

### Install [Docker](https://docs.docker.com/get-docker/) on your machine

### Start project in development mode

Create a copy of the .env.example file and rename it to .env inside the server folder

Add your database settings:
```
# server/.env

PORT=8080
JWT_SECRET=secret-jwt-key

POSTGRES_HOST=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=
POSTGRES_DB=

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"

```

To execute this project you need to run the following docker-compose command:

```bash
docker compose up -d --build

```
