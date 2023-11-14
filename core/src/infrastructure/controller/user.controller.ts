import { UserUseCase } from '../../application/user.usecase';
import { User } from '../../domain/entity/user.entity';
import type { NextFunction, Request, Response } from 'express';

export class UserController {
  private readonly useCase: UserUseCase;
  constructor(userUseCase: UserUseCase) {
    this.useCase = userUseCase;
    this.registerUser = this.registerUser.bind(this);
  }

  public async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        email,
        password,
      }: Pick<User, 'name' | 'email' | 'password'> = req.body;

      const registeredUser = await this.useCase.registerUser({
        name,
        email,
        password,
      });
      res.json(registeredUser);
    } catch (error) {
      next(error);
    }
  }
}
