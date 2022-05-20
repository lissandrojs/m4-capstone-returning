import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Pedido } from "./Pedidos";
import { Console } from "./Consoles";

@Entity("consoles_pedidos")
export class Console_Pedido {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Pedido, (pedido_id) => pedido_id.id, {
    eager: true,
  })
  @JoinColumn()
  pedido: Pedido[];

  @ManyToOne(() => Console, (console_id) => console_id.id)
  @JoinColumn()
  console: Console[];
}
