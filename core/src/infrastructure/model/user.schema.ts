import { Schema, model } from 'mongoose';
import type { IUserEntity } from '../../domain/entity/user.data';

const userSchema = new Schema<IUserEntity>({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  phone: {
    type: String,
  },
  photo: {
    type: String,
  },
});

export const UserModel = model<IUserEntity>('User', userSchema);
