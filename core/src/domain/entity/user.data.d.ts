interface IUserEntity {
  id: string;
  name: string;
  email: string;
  password: string | null;
  bio: string;
  phone: string;
  photo: string;
}

export { IUserEntity };
