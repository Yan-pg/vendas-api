import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ massage: 'Hello dev' });
});

export default routes;