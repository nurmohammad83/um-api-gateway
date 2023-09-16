import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

const redisClint = createClient({
  url: config.redis.url
});

redisClint.on('error', (err) => logger.error('Redis Error', err));
redisClint.on('connect', (err) => logger.info('Redis Connected'));

const connect = async () => {
  await redisClint.connect();
};

export const RedisClient = {
  connect
};
