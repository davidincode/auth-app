import { v4 as UUID } from 'uuid';
import type { IUserEntity } from './user.data';

type UserData = Pick<IUserEntity, 'name' | 'email'> & Partial<IUserEntity>;

class User implements IUserEntity {
  readonly id: string;
  name: string;
  email: string;
  password: string | null;
  bio: string;
  phone: string;
  photo: string;

  private constructor(user: UserData) {
    this.id = UUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password ?? null;
    this.bio = user.bio ?? 'N/A';
    this.phone = user.phone ?? 'N/A';
    this.photo = user.photo ?? 'N/A';

    Object.freeze(this);
  }

  static create(user: UserData) {
    return new User(user);
  }
}

export { User };
