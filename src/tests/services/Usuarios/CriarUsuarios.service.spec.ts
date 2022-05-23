
import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import CriarUsuarioService from "../../../services/usuario/criarUsuario.service";
import AtualizarUsuarioService from "../../../services/usuario/atualizarUsuario.service";


describe("Deve ser capaz de criar um novo usuário", () => {
  let conexaoDb: any = DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (conexaoDb = res))
      .catch((err) => {
        console.error("Error during data source initialization");
      });
  });

  afterAll(async () => {
    await conexaoDb.destroy();
  });

  let teste = ''

  test("Deve ser capaz de inserir um novo usuário no database", async () => {
    const novoUsuario = new CriarUsuarioService();
    const usuario = await novoUsuario.execute({
      nome: "Fulano",
      cpf: "22656325492",
      email: "fulano@hotmail.com",
      telefone: 995632663,
      senha: "12345",
      pendencia: true,
    });
    teste = usuario.id
    expect(usuario).toBeTruthy();
  });

  test("Deve ser capaz de atualizar um usuário", async () => {
    const usuario = new AtualizarUsuarioService();
    const newUser = usuario.execute({
      id: teste,
      cpf: "123456",
      email: "novoemail@email.com",
      nome: "Nome atualizado",
      pendencia: false,
      senha: "123456",
      telefone: 37142833,
    });

    expect(newUser).toBeTruthy();
  });


});
