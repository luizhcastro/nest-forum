import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "../config/envs";
import * as schema from "./schemas";

export const DATABASE_CONNECTION = Symbol("DATABASE_CONNECTION");

export const DatabaseProvider = {
  provide: DATABASE_CONNECTION,
  useFactory: () => {
    const pool = new Pool({
      host: env.DATABASE_HOST,
      port: env.DATABASE_PORT,
      user: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
    });
    return drizzle(pool, { schema });
  },
};
