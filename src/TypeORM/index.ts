import type { ConnectionOptions } from 'typeorm';

const { DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const credentials = {
  type: DB_TYPE as 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
};

const options: ConnectionOptions = {
  entities: ['dist/Module/**/*.js'],
  synchronize: false,
  dropSchema: false,
  migrationsRun: false,
  logging: ['warn', 'error'],
  logger: process.env.NODE_ENV === 'production' ? 'file' : 'debug',
  migrations: ['dist/TypeORM/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: 'src/TypeORM/migrations',
  },
  ...credentials,
};

export default options;
