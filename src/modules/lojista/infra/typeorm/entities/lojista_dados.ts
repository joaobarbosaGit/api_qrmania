import { Users } from "@modules/users/infra/typeorm/entities/Users";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
 
@Entity("lojista_dados")
class Lojista_Dados {

    @PrimaryColumn()
    id!: number;

    @Column()
    users_id!: number;

    @OneToOne(() => Users, users => users.lojista_dados) // specify inverse side as a second parameter
    @JoinColumn({ name: "users_id" })
    users!: Users;

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