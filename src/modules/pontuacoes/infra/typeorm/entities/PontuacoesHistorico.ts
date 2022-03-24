import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pontuacoes_historico")
class PontuacoesHistorico {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  pontos!: number;

  @Column()
  pontuacao_id!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  tipo!: string;
}

export { PontuacoesHistorico };
