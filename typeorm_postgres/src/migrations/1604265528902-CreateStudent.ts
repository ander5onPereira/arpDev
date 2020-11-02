import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStudent1604265528902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "studet",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "key",
            type: "varchar",
          },
          {
            name: "created_At",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_At",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("studet");
  }
}
