import { getRepository, Repository } from "typeorm";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { Users } from "../entities/Users";


class UsersRepository implements IUsersRepository {

    private repository: Repository<Users>;

    constructor(){
        this.repository = getRepository(Users);
    }


    async listAllUsersActives(): Promise<Users[]> {

        const Users = await this.repository.createQueryBuilder("Users")
        .select("'users.id', 'users.name', 'users.nome_fantasia','users.telefone', 'users.uf', 'cidades.cidade', 'users.tipo_estabelecimento',        'users.endereco', 'users.endereco_numero', 'users.endereco_bairro',            'lojista_dados.imagem_capa', 'lojista_dados.imagem_thumb',            'users.cpf_cnpj', 'lojista_dados.site', 'users.email'")
        .where("'users.status', '=', '1'")
        .getMany();


        return Users;

    }

}

export { UsersRepository };