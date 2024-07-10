import dotenv from 'dotenv';
dotenv.config();

export default {
  client: 'mysql2',  // or 'mysql'
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT as string, 10),
  },
  migrations: {
    directory: './src/migrations',
  },
  seeds: {
    directory: './src/seeds',
  },
};
