import { Cidades } from "@modules/cities/infra/typeorm/entities/Cidades";
import { Lojista_Dados } from "@modules/lojista/infra/typeorm/entities/lojista_dados";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Users_Rules } from "./Users_Rules";

 
@Entity("users")
class Users {

    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email !: string;

    @Column()
    email_verified_at !: Date;

    @Column()
    password !: string;

    @Column()
    cpf_cnpj !: string;

    @Column()
    telefone !: string;

    @Column()
    token !: string;

    @Column()
    tipo !: string;

    @Column()
    status !: number;

    @Column()
    nome_fantasia !: string;

    @Column()
    tipo_pessoa !: string;

    @Column()
    deleted !: number;

    @Column()
    remember_token !: string;

    @Column()
    created_at !: Date;

    @Column()
    updated_at !: Date;

    @Column()
    tipo_estabelecimento !: string;

    @Column()
    uf !: string;

    @Column()
    cidade !: number;

    @Column()
    avatar !: string;

    @Column()
    endereco !: string;

    @Column()
    endereco_numero !: string;

    @Column()
    endereco_bairro !: string;

    @Column()
    endereco_cep !: string;

    @Column()
    data_nascimento !: Date;

    @Column()
    categoria !: number;

    @Column()
    subcategoria !: number;

    @Column()
    id_estabelecimento_colaborador !: number;

    // @OneToOne(()=> Users_Rules)
    // @JoinColumn({ name: "users_rules_id"})
    // users_rules!: Users_Rules;

    @ManyToOne(()=> Cidades)
    @JoinColumn({ name: "cidade"})
    cidades!: Cidades;

    // @OneToOne(()=> Lojista_Dados)
    // @JoinTable({
    //     name: "lojista_Dados",
    //     joinColumns: [{ name: "users_id"}],
    //     inverseJoinColumns: [{ name: "id"}]
    // })
    // lojista_dados!: Lojista_Dados;

    

}

export { Users }