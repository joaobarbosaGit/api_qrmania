import { Column, Entity, PrimaryColumn } from "typeorm";

 
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
    updated_at!: Date ;
   

}

export { Raspadinha }