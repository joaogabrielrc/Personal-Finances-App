<h1 align="center">Personal Finances App - Node.js</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=18.12.0&color=7159c1&style=plastic" />     
  <img src="https://img.shields.io/static/v1?label=react&message=18.0.25&color=7159c1&style=plastic" />     
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=00e200&style=plastic" />
</p>

## :wrench: Technology Stack

this project was built using [Node v18.x] and uses the following technologies:

- [ESLint](https://eslint.org/) - For improving code quality.
- [TypeScript](https://www.typescriptlang.org/) - For programming language.
- [Prisma](https://www.prisma.io/) - For manipulate the data source.
- [JWT](https://jwt.io/) - For security in the transmission of information
- [Docker](https://www.docker.com/) - For run the project.
- [Yarn](https://yarnpkg.com/) - For dependency management.

## :rocket: Running the project with Docker

### Install [Docker](https://docs.docker.com/get-docker/) on your machine

### Start project in development mode

Create a copy of the .env.example file and rename it to .env inside the server folder

Add your database credentials:
```
# server/.env

PORT=8080
JWT_SECRET='secret-jwt-key'

POSTGRES_HOST=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=
POSTGRES_DB=

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"

```

Run the project with the following command:

```bash
docker compose up -d --build

```
