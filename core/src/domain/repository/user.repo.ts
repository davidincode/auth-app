import { User } from '../entity/user.entity';

interface UserRepository {
  register(user: User): Promise<User | null>;
  // logIn(user: User): Promise<void>;
  // logOut(user: User): Promise<void>;
  // getUserByEmail(email: string): Promise<User>;
  // updateProfile(user: User): Promise<User>;
  // updateEmail(email: string): Promise<User>;
  // updatePassword(password: string): Promise<User>;
  // delete(): Promise<void>;
}

export { UserRepository };
