import Router from 'express';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/auth', SessionController.authenticate);
routes.post('/register', SessionController.register);

routes.get('/home', AuthMiddleware, async (request, response) =>
  response.json({ userId: request.userId })
);

routes.get('/', async (request, response) =>
  response.json({ Api: 'Its Works!!' })
);

export default routes;
