import { User } from '../domain/entity/user.entity';
import { UserRepository } from '../domain/repository/user.repo';

class UserUseCase {
  private readonly repository: UserRepository;

  constructor(private readonly userRepository: UserRepository) {
    this.repository = userRepository;
  }

  async registerUser({
    name,
    email,
    password,
  }: Pick<User, 'name' | 'email' | 'password'>): Promise<User | null> {
    const unregisteredUser = User.create({ name, email, password });
    const registeredUser = await this.repository.register(unregisteredUser);

    return registeredUser;
  }
}

export { UserUseCase };
