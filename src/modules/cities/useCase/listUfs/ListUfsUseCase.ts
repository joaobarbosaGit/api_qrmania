import { inject, injectable } from "tsyringe";

import { ICidadesRepository } from "@modules/cities/repositories/ICidadesRepository";

@injectable()
class ListUfsUseCase{

    constructor(

    @inject("CidadesRepository")
    private cidadesRepository: ICidadesRepository
    ){};

    async execute() : Promise< string[]> {

       const ufs = await this.cidadesRepository.listAllUf();

       return ufs;
    }
}

export { ListUfsUseCase };