import { getRepository, Repository } from "typeorm";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { Users } from "../entities/Users";
import { AppError } from "@shared/erros/AppError";


class UsersRepository implements IUsersRepository {

    private repository: Repository<Users>;

    constructor(){
        this.repository = getRepository(Users);
    }

    async listAllUsersActives(): Promise<Users[]> {

        const users = await this.repository
        .createQueryBuilder("user")
        .select("users.name")
        .addSelect("users.email")
        .addSelect("users.nome_fantasia")
        .addSelect("users.telefone")
        .addSelect("users.uf")
        .addSelect("users.cidade")
        .addSelect("users.tipo_estabelecimento")
        .addSelect("users.endereco")
        .addSelect("users.endereco_numero")
        .addSelect("users.endereco_bairro")
        .addSelect("users.cpf_cnpj")
        .addSelect("users.email")
        .from(Users, "users")
        .leftJoinAndSelect("users.cidades","cidades")
        .leftJoinAndSelect("users.lojista_dados","lojista_dados", )
        .where("users.tipo = :tipo", {tipo: "ESTAB"})
        .andWhere("users.status = :status", {status: 1})
        .getMany();


        return users;

    }

    async findUserbyEmail(email: string): Promise<Users> {
        
        const user = await this.repository
        .createQueryBuilder("user")
        .select("users.name")
        .addSelect("users.email")
        .addSelect("users.nome_fantasia")
        .addSelect("users.telefone")
        .addSelect("users.uf")
        .addSelect("users.cidade")
        .addSelect("users.tipo_estabelecimento")
        .addSelect("users.endereco")
        .addSelect("users.endereco_numero")
        .addSelect("users.endereco_bairro")
        .addSelect("users.cpf_cnpj")
        .addSelect("users.email")
        .from(Users, "users")
        .where("users.email = :email", { email})
        .getOne();

        if(!user){
            throw new AppError("Email Does not Exist");
        }


        return user;
    }

}

export { UsersRepository };