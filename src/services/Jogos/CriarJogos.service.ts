import { Jogo } from "../../models/Jogos";
import { AppDataSource } from "../../data-source";
import { IJogosCriar } from "../../interfaces/Jogos";
import AppError from "../../errors/AppError";

export default class CriarJogosService {
  static async execute({
    nome,
    valor,
    descricao_jogo,
    dono,
    estado,
    disponivel,
  }: IJogosCriar): Promise<Jogo> {
    const jogoRepositorio = AppDataSource.getRepository(Jogo);

    const jogo = jogoRepositorio.create({
      nome,
      valor,
      descricao_jogo,
      dono,
      estado,
      disponivel,
    });

    await jogoRepositorio.save(jogo);

    return jogo;
  }
}
