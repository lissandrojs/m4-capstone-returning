import { Console } from "../../entities/Consoles";
import { AppDataSource } from "../../data-source";
import { IConsoleAlterar } from "../../interfaces/Console";
const AtualizarConsoleService = async ({
  id,
  nome,
  valor,
  dono,
  estado,
  observacao,
  disponivel,
}: IConsoleAlterar) => {
  const consoleRepositorio = AppDataSource.getRepository(Console);

  const console = await consoleRepositorio.find();

  const buscarConsole = console.find((item) => {
    item.id === id;
  });

  await consoleRepositorio.update(buscarConsole!.id, {
    nome: nome || buscarConsole!.nome,
    valor:valor || buscarConsole!.valor,
    dono: dono || buscarConsole!.dono,
    estado: estado || buscarConsole!.estado,
    observacao: observacao || buscarConsole!.observacao,
    disponivel: disponivel || buscarConsole!.disponivel
  });

  return true
};

export default AtualizarConsoleService;
