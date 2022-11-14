# pull official base image
FROM node:18.12.0

# set work directory
WORKDIR /usr/src/app

# install netcat to verify Postgres integrity
RUN apt update
RUN apt install netcat -y

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# copy configuration files
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./

# install dependencies and migrate database
RUN npm install
RUN npx prisma generate

# copy all files
COPY . .

# run the program
EXPOSE 8080
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
CMD npm run dev
