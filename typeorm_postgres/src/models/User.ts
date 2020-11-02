import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() //na base de dados tem uma tabela User
export class User {
  //informa que tem um campo id tipo number que é a chave primaria e é gerado automaticamente
  @PrimaryGeneratedColumn()
  id: number;
  //declara que tem uma coluna com nome firstName do tipo string
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
