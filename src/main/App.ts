import 'express-async-errors';
import 'dotenv/config';
import express, { json } from 'express';
import router from './routes';
import errorHandlerMiddleware from './middleware/error-handler';
import routeNotFoundMiddleware from './middleware/route-not-found';

class App {
  public readonly express = express();

  constructor() {
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.express.use(json());
  }

  private routes() {
    this.express.use(router);
    this.express.use(routeNotFoundMiddleware);
    this.express.use(errorHandlerMiddleware);
  }
}

export default new App().express;
