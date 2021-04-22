import { getCustomRepository } from 'typeorm';
import Posts from '../typeorm/entities/Posts';
import PostRepository from '../typeorm/repositories/PostsRepository';

interface IRequest {
  recipient_id: string;
  sending_id: string;
}

class ListPostsService {
  public async execute({
    recipient_id,
    sending_id,
  }: IRequest): Promise<typeof Posts[] | undefined> {
    const usersRepository = getCustomRepository(PostRepository);
    const postUser = await usersRepository.findById(recipient_id, sending_id);

    return postUser;
  }
}

export default ListPostsService;
