import { User } from '../../domain/entity/user.entity';
import { UserModel } from '../model/user.schema';
import { UserRepository } from '../../domain/repository/user.repo';

export class MongoDBRepository implements UserRepository {
  async register(user: User): Promise<User | null> {
    const registeredUser = await UserModel.create(user);
    return registeredUser;
  }
}
