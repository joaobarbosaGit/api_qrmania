import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

 
@Entity("Users")
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

    // @ManyToOne(()=> DadosEndereco)
    // @JoinColumn({ name: "Dados_Endereco_idDados_Endereco" })
    // DadosEndereco!: DadosEndereco;

    

}

export { Users }