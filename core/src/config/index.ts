import { isAnyConfigMissing } from './helper/config.help';

const {
  SERVER_RUNNING_PORT,
  SERVER_RUNNING_ENV,
  DATABASE_CONNECTION_STRING,
  SESSION_SECRET_KEY,
} = process.env;

const serverConfig = Object.freeze({
  PORT: SERVER_RUNNING_PORT,
  ENV: SERVER_RUNNING_ENV,
});

const databaseConfig = Object.freeze({
  CONNECTION_STRING: DATABASE_CONNECTION_STRING,
});

const sessionConfig = Object.freeze({
  SECRET_KEY: SESSION_SECRET_KEY,
});

if (isAnyConfigMissing([serverConfig, databaseConfig, sessionConfig])) {
  console.error('The server is not configured correctly');
  //   throw new InternalError();
}

export { serverConfig, databaseConfig, sessionConfig };
