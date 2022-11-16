/* eslint-disable no-console */
import app from './App';
import prismaClient from './database/connect';

const PORT = process.env.PORT ?? 8080;

prismaClient.$connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
  });
});
