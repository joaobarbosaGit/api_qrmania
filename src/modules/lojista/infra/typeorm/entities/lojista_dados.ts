import { Column, Entity, PrimaryColumn } from "typeorm";
 
@Entity("lojista_dados")
class Lojista_Dados {

    @PrimaryColumn()
    id!: number;

    @Column()
    users_id!: string;

    @Column()
    created_at !: Date;

    @Column()
    updated_at !: Date;

    @Column()
    imagem_capa !: string;

    @Column()
    imagem_thumb !: string;

    @Column()
    cielo_id !: string;

    @Column()
    cielo_key !: string;

    @Column()
    token_lojista !: string;

    @Column()
    tipo_pagamento !: string;

    @Column()
    rede_pv !: string;

    @Column()
    rede_token !: string;

    @Column()
    site !: string;

    @Column()
    pagarme_key !: string;

}

export { Lojista_Dados }