import { createConnection } from 'typeorm';

export default () => {
  // @ts-ignore
  return createConnection({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [process.env.TYPEORM_ENTITIES],
    migrations: [process.env.TYPEORM_MIGRATIONS],
    synchronize: false,
    cli: {
      entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
      migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    },
  })
    .then(() => console.log(`db connected`))
    .catch((err: Error) => console.log(err));
};
