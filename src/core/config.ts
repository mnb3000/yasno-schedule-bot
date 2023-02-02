const mongoHost = process.env.MONGO_HOST || '';
const mongoPort = process.env.MONGO_PORT || '';
const mongoUser = process.env.MONGO_USER || '';
const mongoPass = process.env.MONGO_PASS || '';
const mongoDbName = process.env.MONGO_DATABASE || '';
const mongoUrl = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/`;

export const config = {
  token: process.env.BOT_TOKEN || '',
  mongo: {
    url: mongoUrl,
    dbName: mongoDbName,
  },
};
