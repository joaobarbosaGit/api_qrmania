import { Column, Entity, PrimaryColumn } from "typeorm";

 
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


}

export { Pontuacoes }