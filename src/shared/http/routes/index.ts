import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import sessionRouter from '@modules/users/routes/sessions.routes';
import postsRouter from '@modules/posts/routes/posts.routes';

const routes = Router();

//user
routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);

routes.use('/posts', postsRouter);

export default routes;
