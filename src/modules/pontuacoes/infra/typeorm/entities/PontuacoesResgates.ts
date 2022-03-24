import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("pontuacoes_resgates")
class PontuacoesResgates {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cliente!: number;

  @Column()
  estabelecimento!: number;

  @Column()
  premio!: number;

  @Column()
  pontos!: number;

  @Column()
  data_resgate!: Date;

  @Column()
  usuario!: number;
}

export { PontuacoesResgates };
