import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Raspadinha } from "./Raspadinha";

@Entity("raspadinha_tickets")
class Raspadinha_Ticket {
  @PrimaryColumn()
  idraspadinha_tickets!: number;

  @Column()
  status!: number;

  @Column()
  sorteada!: number;

  @Column()
  token!: string;

  @ManyToOne(() => Raspadinha, (raspadinha) => raspadinha.raspadinha_tickets)
  @JoinColumn({ name: "raspadinha_id" })
  raspadinha_id!: number;

  @Column()
  user_id!: number;

  @Column()
  raspadinha_premios_id!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  raspado!: number;

  @Column()
  raspado_at!: string;
}

export { Raspadinha_Ticket };
