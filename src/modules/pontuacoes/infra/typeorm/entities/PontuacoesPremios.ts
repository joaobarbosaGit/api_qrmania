import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Users } from "@modules/users/infra/typeorm/entities/Users";

@Entity("pontuacoes_premios")
class PontuacoesPremios {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  descricao!: string;

  @Column()
  foto!: string;

  @Column()
  pontos!: number;

  @ManyToOne(() => Users, (users) => users.id)
  @JoinColumn({ name: "estabelecimento_id" })
  estabelecimento_id!: number;

  @Column()
  status!: number;
}

export { PontuacoesPremios };
