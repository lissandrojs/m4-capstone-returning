/* import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Testando a rota de usuários", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Erro durante a inicialização do Data Source", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Deve atualizar um usuário no banco de dados", async () => {
    const cpf = "12345660";
    const email = "novoemail50@email.com";
    const nome = "Nome bem atualizado ";
    const pendencia = false;
    const senha = "12345680";
    const telefone = 37142834;

    const usuarioInfo = { cpf, email, nome, pendencia, senha, telefone };
    const response = await request(app).post("/usuarios").send(usuarioInfo);
    const userId = response.body.id;
    return await request(app)
      .patch(`/usuarios/${userId} `)
      .send({ nome: "Maria" })
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.usuarioAtualizado.nome).toBe("Maria");
      });
  });
});
 */
