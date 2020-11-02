import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1604262378056 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "class",
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
            name: "duration",
            type: "integer",
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
    await queryRunner.dropTable("class");
  }
}
