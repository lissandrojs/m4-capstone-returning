import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaConsole1652799835366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: "consoles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "nome",
            type: "varchar",
            length: "128",
          },
          {
            name: "descricao",
            type: "varchar",
            length: "256",
          },
          {
            name: "valor",
            type: "decimal",
            precision: 8,
            scale: 2,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("consoles");
  }
}
