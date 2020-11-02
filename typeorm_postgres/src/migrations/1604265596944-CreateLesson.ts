import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLesson1604265596944 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "lesson",
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
            name: "description",
            type: "varchar",
          },
          {
            name: "linkContent",
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
    await queryRunner.dropTable("lesson");
  }
}
