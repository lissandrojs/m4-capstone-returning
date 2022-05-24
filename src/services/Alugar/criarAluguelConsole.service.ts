import { In } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { Pedido } from "../../models/Pedidos";
import { Console_Pedido } from "../../models/Consoles_Pedidos";
import { Console } from "../../models/Consoles";
import jwt from "jsonwebtoken";

interface Request {
  console_id: string[];
  token: string | undefined;
}

export default class CriarAluguelConsole {
  static async execute({ console_id, token }: Request): Promise<Pedido> {
    const pedidoRepositorio = AppDataSource.getRepository(Pedido);
    const consolePedidoRepositorio =
      AppDataSource.getRepository(Console_Pedido);

    const consoleRepositorio = AppDataSource.getRepository(Console);

    if (!token) {
      throw new AppError("Token não encontrado");
    }

    const { usuarioCarrinho }: any = jwt.decode(token);

    const consoles = await consoleRepositorio.findBy({
      id: In(console_id),
    });


    if (consoles.length !== console_id.length) {
      throw new AppError("Lista invalida com esse id");
    }

    const pedido = pedidoRepositorio.create({ carrinhoId: usuarioCarrinho });

    await pedidoRepositorio.save(pedido);

    console_id.forEach(async (consoleId) => {
      const consolePedido = consolePedidoRepositorio.create({
        pedido: pedido,
        consoleId,
      });

      await consolePedidoRepositorio.save(consolePedido);
    });
    return pedido;
  }
}