import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import { UserUseCase } from '../../application/user.usecase';
import { MongoDBRepository } from '../repository/mongodb.repo';

const userRouter = Router();

const userRepository = new MongoDBRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

userRouter.post('/signup', userController.registerUser);

export default userRouter;
