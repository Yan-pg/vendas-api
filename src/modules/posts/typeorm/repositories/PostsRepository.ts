import { EntityRepository, Repository } from 'typeorm';
import Posts from '../entities/Posts';

@EntityRepository(Posts)
class PostRepository extends Repository<typeof Posts | any> {
  public async findById(
    recipient_id: string,
    sending_id: string,
  ): Promise<typeof Posts[]> {
    const posts = await this.find({
      where: {
        sending_id,
        recipient_id,
      },
    });

    return posts;
  }
}

export default PostRepository;
