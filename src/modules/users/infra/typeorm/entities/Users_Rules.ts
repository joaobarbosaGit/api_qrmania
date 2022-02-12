import { Column, Entity, PrimaryColumn } from "typeorm";
 
@Entity("users_rules")
class Users_Rules {

    @PrimaryColumn()
    idusers_rules!: number;

    @Column()
    idusers!: number;

    @Column()
    show_in_app !: number;

    @Column()
    ofertas !: number;

    @Column()
    ganhe_na_hora !: number;

    @Column()
    raspadinha !: number;

    @Column()
    pontuacao !: number;


}

export { Users_Rules }