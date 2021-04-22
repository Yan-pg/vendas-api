import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import Posts from '@modules/posts/typeorm/entities/Posts';

class ListUserService {
  public async execute(): Promise<User[] | Posts[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return users;
  }
}

export default ListUserService;
