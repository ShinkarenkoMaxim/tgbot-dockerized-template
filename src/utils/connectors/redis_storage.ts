import IORedis from 'ioredis';

const client = new IORedis(process.env.REDIS_DB_URL);

client.on('error', (error) => {
  console.error(error);
});

export default client;
