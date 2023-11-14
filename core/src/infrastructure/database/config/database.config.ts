const { DATABASE_CONNECTION_STRING } = process.env;

if (!DATABASE_CONNECTION_STRING) {
  console.error('The database is not configured correctly');
  //   throw new InternalError();
}

export const MongoDBConfig = Object.freeze({
  CONNECTION_STRING: DATABASE_CONNECTION_STRING,
});
