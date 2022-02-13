interface IFindLojista_DadosDTO {
    
    id: number;
    users_id: string;
    created_at: Date;
    updated_at: Date;
    imagem_capa: string;
    imagem_thumb: string;
    cielo_id: string;
    cielo_key: string;
    token_lojista: string;
    tipo_pagamento: string;
    rede_pv: string;
    rede_token: string;
    site: string;
    pagarme_key: string;

}

export { IFindLojista_DadosDTO };