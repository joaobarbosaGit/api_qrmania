import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pontuacoes } from "./Pontuacoes";

@Entity("pontuacoes_historico")
class PontuacoesHistorico {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  pontos!: number;

  @ManyToOne(() => Pontuacoes, (pontuacoes) => pontuacoes.pontuacoes_historico)
  @JoinColumn({ name: "pontuacao_id" })
  pontuacao_id!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  tipo!: string;
}

export { PontuacoesHistorico };
