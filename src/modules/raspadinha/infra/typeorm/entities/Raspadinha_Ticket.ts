import { Column, Entity, PrimaryColumn } from "typeorm";

 
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

    @Column()
    raspadinha_id!: number;

    @Column()
    user_id!: number;

    @Column()
    raspadinha_premios_id!: number ;

    @Column()
    created_at!: Date ;

    @Column()
    updated_at!: Date ;

    @Column()
    raspado!: number ;
    
    @Column()
    raspado_at!: Date ;
   

}

export { Raspadinha_Ticket }