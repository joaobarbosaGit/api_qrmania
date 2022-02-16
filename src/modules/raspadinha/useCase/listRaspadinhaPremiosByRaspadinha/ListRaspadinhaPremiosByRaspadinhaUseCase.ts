import { inject, injectable } from "tsyringe";

import { IListRaspadinhaPremiosByRaspadinhaDTO } from "@modules/raspadinha/dtos/IListRaspadinhaPremiosByRaspadinhaDTO";
import { Raspadinha_Premios } from "@modules/raspadinha/infra/typeorm/entities/Raspadinha_Premios";
import { IRaspadinha_PremiosRepository } from "@modules/raspadinha/repositories/IRaspadinha_PremiosRepository";

@injectable()
class ListRaspadinhaPremiosByRaspadinhaUseCase{

    constructor(
    @inject("RaspadinhaPremiosRepository")
    private raspadinhaPremiosRepository: IRaspadinha_PremiosRepository
    ){};

    async execute( {raspadinha_id} : IListRaspadinhaPremiosByRaspadinhaDTO) : Promise<Raspadinha_Premios[]> {

       const raspadinha_Premios = await this.raspadinhaPremiosRepository.listAllRaspadinha_PremiosByRaspadinha(raspadinha_id);

       return raspadinha_Premios;
    }
}

export { ListRaspadinhaPremiosByRaspadinhaUseCase };