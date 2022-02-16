import { inject, injectable } from "tsyringe";

import { IListCidadesDTO } from "@modules/cities/dtos/IListCidadesDTO";
import { Cidades } from "@modules/cities/infra/typeorm/entities/Cidades";
import { ICidadesRepository } from "@modules/cities/repositories/ICidadesRepository";


@injectable()
class ListCidadesByUfUseCase{

    constructor(

    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
    ){};

    async execute({uf}: IListCidadesDTO) : Promise< Cidades[]> {

       const cidades = await this.cidadesRepository.listAllCidadesByUf(uf);

       return cidades;
    }
}

export { ListCidadesByUfUseCase };