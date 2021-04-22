import isAuthenticated from '@shared/http/middlewares/isAutheticated';
import { Router } from 'express';
import PostsController from '../controllers/PostsController';

const sessionRoute = Router();

const postsController = new PostsController();

sessionRoute.post('/', isAuthenticated, postsController.create);
sessionRoute.get('/:recipient_id/', isAuthenticated, postsController.index);

export default sessionRoute;
