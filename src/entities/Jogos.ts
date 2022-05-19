import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("jogos")
export class Jogo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", length: 128 })
  nome: string;

  @Column({ type: "varchar", length: 256 })
  descricao: string;

  @Column({ type: "decimal", precision: 8, scale: 2 })
  valor: number;

  @Column({ type: "varchar", length: 128 })
  dono: string;

  @Column({ type: "varchar", length: 128 })
  estado: string;

  @Column({ type: "varchar", length: 256 })
  observacao: string;

  @Column()
  disponivel: boolean;
}
