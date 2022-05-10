import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Raspadinha_Premios } from "./Raspadinha_Premios";
import { Raspadinha_Ticket } from "./Raspadinha_Ticket";

@Entity("raspadinha")
class Raspadinha {
  @PrimaryColumn()
  idraspadinha!: number;

  @Column()
  nome!: string;

  @Column()
  total_quantity!: number;

  @Column()
  status!: number;

  @Column()
  estabelecimento_id!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @OneToMany(
    () => Raspadinha_Ticket,
    (raspadinha_tickets) => raspadinha_tickets.raspadinha_id
  )
  @JoinColumn({ name: "idraspadinha" })
  raspadinha_tickets!: Raspadinha_Ticket[];

  @OneToMany(
    () => Raspadinha_Premios,
    (raspadinha_Premios) => raspadinha_Premios.raspadinha_id
  )
  @JoinColumn({ name: "idraspadinha" })
  raspadinha_premios!: Raspadinha_Premios[];
}

export { Raspadinha };
