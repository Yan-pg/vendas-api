import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '@modules/users/typeorm/entities/User';

@Entity('posts')
class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @Column()
  recipient_id: string;

  @Column()
  sending_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  created_at: string;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Posts;
