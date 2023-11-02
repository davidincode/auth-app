import { User } from '../entity/user.entity';

interface UserRepository {
  signUp(user: User): Promise<User>;
  logIn(email: string, password: string): Promise<User>;
  logOut(): Promise<void>;
  getUserByEmail(email: string): Promise<User>;
  updateProfile(user: User): Promise<User>;
  updateEmail(email: string): Promise<User>;
  updatePassword(password: string): Promise<User>;
  delete(): Promise<void>;
}

export { UserRepository };
