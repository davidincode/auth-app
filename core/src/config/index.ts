import { isAnyConfigMissing } from './helper/config.help';

const { SERVER_RUNNING_PORT, SERVER_RUNNING_ENV, SESSION_SECRET_KEY } =
  process.env;

const serverConfig = Object.freeze({
  PORT: SERVER_RUNNING_PORT,
  ENV: SERVER_RUNNING_ENV,
});

// const sessionConfig = Object.freeze({
//   SECRET_KEY: SESSION_SECRET_KEY,
// });

if (isAnyConfigMissing([serverConfig])) {
  console.error('The server is not configured correctly');
  //   throw new InternalError();
}

export { serverConfig };
