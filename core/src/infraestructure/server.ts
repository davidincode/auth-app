import express from 'express';
import { serverConfig, databaseConfig, sessionConfig } from '../config';

const app = express();
app.use(express.json());

export default app;
