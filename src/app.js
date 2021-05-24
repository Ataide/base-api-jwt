import dotenv from 'dotenv';
import express, { json } from 'express';
import routes from './routes';
import './database';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(json());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new AppController().express;
