import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Raspadinha } from "./Raspadinha";

@Entity("raspadinha_premios")
class Raspadinha_Premios {
  @PrimaryColumn()
  idraspadinha_premios!: number;

  @Column()
  nome!: string;

  @Column()
  descricao!: string;

  @ManyToOne(() => Raspadinha, (raspadinha) => raspadinha.raspadinha_premios)
  @JoinColumn({ name: "raspadinha_id" })
  raspadinha_id!: number;

  @Column()
  token!: string;

  @Column()
  foto!: string;

  @CreateDateColumn()
  created_at!: Date;

  @Column()
  updated_at!: Date;
}

export { Raspadinha_Premios };
