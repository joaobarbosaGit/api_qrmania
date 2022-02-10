interface ICreateUsersDTO {

    id?: number;
    name: string;
    email: string;
    email_verified_at?: Date;
    password: string;
    cpf_cnpj: string;
    telefone: string;
    token: string;
    tipo: string;
    status: string;
    nome_fantasia?: string;
    tipo_pessoa: string;
    deleted: number;
    remember_token: string;
    created_at: Date;
    updated_at?: Date;
    tipo_estabelecimento: string;
    uf: string;
    cidade: number;
    avatar?: string;
    endereco: string;
    endereco_numero: string;
    endereco_bairro: string;
    endereco_cep: string;
    data_nascimento?: Date;
    categoria?: number;
    subcategoria?: number;
    id_estabelecimento_colaborador?: number;
}

export { ICreateUsersDTO };