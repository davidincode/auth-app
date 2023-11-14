import { connect } from 'mongoose';
import { MongoDBConfig } from '../config/database.config';

export const connectToMongoDB = async () => {
  const { CONNECTION_STRING } = MongoDBConfig;
  await connect(CONNECTION_STRING as string);
  console.info('The server is now connected to MongoDB');
};
