import { MigrationInterface, QueryRunner,TableForeignKey } from "typeorm"

export class AdicionarReferenciasCarrinho1652808843948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "carrinho",
            new TableForeignKey({
                name:"UsuarioFK",
                columnNames:["usurarioId"],
                referencedColumnNames:["id"],
                referencedTableName:"usuario",
                onDelete: "CASCADE",
                onUpdate: "CASACADE"
            })
        )

        await queryRunner.createForeignKey(
            "carrinho",
            new TableForeignKey({
                name:"PedidoFK",
                columnNames:["pedidoId"],
                referencedColumnNames:["id"],
                referencedTableName:"pedido",
                onDelete: "CASCADE",
                onUpdate: "CASACADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("carinho","UsuarioFK")
        await queryRunner.dropForeignKey("carinho","PedidoFK")
    }

}
