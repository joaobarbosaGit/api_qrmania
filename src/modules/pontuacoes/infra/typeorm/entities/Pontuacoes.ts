import { Users } from "@modules/users/infra/typeorm/entities/Users";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { PontuacoesHistorico } from "./PontuacoesHistorico";

@Entity("pontuacoes")
class Pontuacoes {
  @PrimaryColumn()
  id!: number;

  @Column()
  pontos!: number;

  @Column()
  status!: number;

  @Column()
  deleted!: number;

  @Column()
  user_id!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  estabelecimento_id!: number;

  @OneToOne(() => Users)
  @JoinColumn({ name: "id" })
  dados_estabelecimento!: Users;

  @OneToMany(
    () => PontuacoesHistorico,
    (pontuacoesHistorico) => pontuacoesHistorico.pontuacao_id
  )
  pontuacoes_historico!: PontuacoesHistorico[];
}

export { Pontuacoes };
