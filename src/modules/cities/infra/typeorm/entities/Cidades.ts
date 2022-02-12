import { Column, Entity, PrimaryColumn } from "typeorm";
 
@Entity("cidades")
class Cidades {

    @PrimaryColumn()
    id!: number;

    @Column()
    cidade!: string;

    @Column()
    uf !: string;

}

export { Cidades }