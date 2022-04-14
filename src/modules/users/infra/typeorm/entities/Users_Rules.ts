import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Users } from "./Users";

@Entity("users_rules")
class Users_Rules {
  @PrimaryColumn()
  idusers_rules!: number;

  @Column()
  idusers!: number;

  @Column()
  show_in_app!: number;

  @Column()
  ofertas!: number;

  @Column()
  ganhe_na_hora!: number;

  @Column()
  raspadinha!: number;

  @Column()
  pontuacao!: number;

  @OneToOne(() => Users, (users) => users.users_Rules)
  @JoinColumn({ name: "idusers" })
  user!: Users;
}

export { Users_Rules };
