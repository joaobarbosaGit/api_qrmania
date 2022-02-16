import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/erros/AppError";
import { IRaspadinha_PremiosRepository } from "@modules/raspadinha/repositories/IRaspadinha_PremiosRepository";
import { Raspadinha_Premios } from "../entities/Raspadinha_Premios";


class Raspadinha_PremiosRepository implements IRaspadinha_PremiosRepository {

    private repository_premios: Repository<Raspadinha_Premios>;

    constructor(){
        this.repository_premios = getRepository(Raspadinha_Premios);
    }

    async listAllRaspadinha_PremiosByRaspadinha(raspadinha_id: number): Promise<Raspadinha_Premios[]> {
        
        const raspadinha_premios = await this.repository_premios
        .createQueryBuilder("raspadinha_premios")
        .where("raspadinha_premios.raspadinha_id = :raspadinha_id", { raspadinha_id})
        .getMany();

        return raspadinha_premios;

    }
}

export { Raspadinha_PremiosRepository };