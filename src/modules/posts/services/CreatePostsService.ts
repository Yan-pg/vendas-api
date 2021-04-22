import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import AppError from '@shared/erros/AppError';
import { getCustomRepository } from 'typeorm';
import Posts from '../typeorm/entities/Posts';
import PostRepository from '../typeorm/repositories/PostsRepository';

interface IRequest {
  message: string;
  recipient_id: string;
  sending_id: string;
  user_id: string;
  userLogged: string;
}

class CreatePostsService {
  public async execute({
    message,
    recipient_id,
    sending_id,
    user_id,
    userLogged,
  }: IRequest): Promise<Posts> {
    const postsRepository = getCustomRepository(PostRepository);
    const userRepository = getCustomRepository(UsersRepository);
    const user = await userRepository.findById(recipient_id);
    const created = `${new Date().getHours()}:${new Date().getMinutes()}`;

    if (sending_id !== userLogged) {
      throw new AppError('incorrect sending_id');
    }

    if (!user) {
      throw new AppError('User not found');
    }

    user.lastMessage = message;
    user.lastTime = created;

    await userRepository.save(user);

    const post = await postsRepository.create({
      message,
      recipient_id,
      sending_id,
      user_id,
      created_at: created,
    });

    await postsRepository.save(post);

    console.log(post);

    return post;
  }
}

export default CreatePostsService;
