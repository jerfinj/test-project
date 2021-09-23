import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as fs from 'fs';
import { CustomerEntity } from '../customer.entity';

export const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  extra: {
    socketPath: process.env.DB_PATH,
  },

  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  entities: [CustomerEntity],
  synchronize: true,
};
export const postgresLocalConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'surfpay-dev',
  password: 'root',
  database: 'customer',
  entities: [CustomerEntity],
 synchronize: true,
};

export const environment = {
  production: false,
  databaseConfig: postgresConfig,
};

