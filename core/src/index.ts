import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './infrastructure/router/user.router';
import globalErrorHandler from './infrastructure/middleware/globalErrorHandler';
import { connectToMongoDB } from './infrastructure/database/MongoDB';
import { serverConfig } from './config';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('*', globalErrorHandler);

connectToMongoDB().then(() => {
  app.listen(serverConfig.PORT, () => {
    console.info(`The server is now running on port ${serverConfig.PORT}`);
  });
});

export default app;
