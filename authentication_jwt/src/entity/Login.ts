import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Login")
export class Login {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
