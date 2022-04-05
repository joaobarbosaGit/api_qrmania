import { Users } from "@modules/users/infra/typeorm/entities/Users";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

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

  // @OneToOne(() => Profile)
  //   @JoinColumn()
  //   profile: Profile

  @OneToOne(() => Users)
  @JoinColumn({ name: "id" })
  dados_estabelecimento!: Users;
}

export { Pontuacoes };
