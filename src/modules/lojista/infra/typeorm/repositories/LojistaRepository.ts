import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/erros/AppError";
import { Lojista_Dados } from "../entities/lojista_dados";
import { ILojista_DadosRepository } from "@modules/lojista/repositories/ILojista_DadosRepository";


class Lojista_DadosRepository implements ILojista_DadosRepository{

    private repository: Repository<Lojista_Dados>;

    constructor(){
        this.repository = getRepository(Lojista_Dados);
    }

    async findLojista_DadosByUsers_Id(users_id: number): Promise<Lojista_Dados> {
       
        const lojista_dados = await this.repository.findOne(users_id);

        if(!lojista_dados){
            return new Lojista_Dados;
        }

        return lojista_dados;
        
    }

}

export { Lojista_DadosRepository };