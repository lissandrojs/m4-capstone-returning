import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 45432,

        username: process.env.POSTGRES_USER,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,

        synchronize: false,
        logging: true,
        migrations: ["src/migrations/*.ts"],
        entities: ["src/entities/*.ts"],
      });

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Data Source initialized");
//   })
//   .catch((err) => console.error("Error during data source initialization"));
