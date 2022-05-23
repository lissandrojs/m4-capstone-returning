import gamesListService from "../../../services/Jogos/ListarJogos.service";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";

describe("List all games", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should list all registered games", async () => {
    const gameList = new gamesListService();

    expect(gameList).toHaveProperty("map");
  });
});

test("Deve ser capaz de listar todos os usuários cadastrados no banco de dado", async () => {
  const todosUsuarios = new gamesListService();
  const todos = todosUsuarios.execute();
  expect(todos).toBeDefined();
});
