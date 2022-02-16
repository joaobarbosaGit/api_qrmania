import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

 
@Entity("raspadinha_premios")
class Raspadinha_Premios {

    @PrimaryColumn()
    idraspadinha_premios!: number;

    @Column()
    nome!: string;

    @Column()
    descricao!: string;

    @Column()
    raspadinha_id!: number;

    @Column()
    token!: string;

    @CreateDateColumn()
    created_at!: Date;

    @Column()
    updated_at!: Date ;
   

}

export { Raspadinha_Premios }