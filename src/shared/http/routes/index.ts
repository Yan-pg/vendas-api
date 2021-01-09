import { Router } from 'express';
import productsRouter from '@modules/users/routes/users.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/products', productsRouter);

export default routes;
