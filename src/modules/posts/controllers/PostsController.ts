import { Request, Response } from 'express';
import CreatePostsService from '../services/CreatePostsService';
import ListePostsService from '../services/ListPostsUserSevice';

export default class PostsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { recipient_id, sending_id } = request.params;
    const listUser = new ListePostsService();

    const users = await listUser.execute({
      recipient_id,
      sending_id,
    });

    return response.json(users);
  }

  public async create(
    request: Request | any,
    response: Response,
  ): Promise<Response> {
    const { message, recipient_id, user_id, sending_id } = request.body;

    const createUser = new CreatePostsService();

    const user = await createUser.execute({
      message,
      recipient_id,
      sending_id,
      user_id,
      userLogged: request.user.id,
    });

    request.io.emit('create-post', user);

    return response.json(user);
  }
}
