import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/usuario.entity";
import AppError from "../errors/AppError";

export default async function usuarioInfoExiste(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const req = request.body;

  const usuarioRepositorio = AppDataSource.getRepository(Usuario);

  if (req.email) {
    const email = req.email;
    const alrearyEmail = await usuarioRepositorio.findOne({ where: { email } });
    if (alrearyEmail) {
      throw new AppError(`Email já existe`);
    }
  }

  if (req.nome) {
    const nome = req.nome;
    const alrearynome = await usuarioRepositorio.findOne({ where: { nome } });
    if (alrearynome) {
      throw new AppError(`Nome já existe`);
    }
  }

  if (req.cpf) {
    const cpf = req.cpf;
    const alrearycpf = await usuarioRepositorio.findOne({ where: { cpf } });
    if (alrearycpf) {
      throw new AppError(`Cpf já existe`);
    }
  }
  if (req.telefone) {
    const telefone = req.telefone;
    const alrearytelefone = await usuarioRepositorio.findOne({
      where: { telefone },
    });
    if (alrearytelefone) {
      throw new AppError(`Telefone já existe`);
    }
  }

  return next();
}
