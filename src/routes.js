import Router from 'express';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/auth', SessionController.authenticate);

routes.post('/register', SessionController.register);

routes.get('/', async (request, response) =>
  response.json({ Api: 'Its Works!!' })
);

export default routes;
