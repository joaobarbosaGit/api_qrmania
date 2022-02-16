import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/erros/AppError";
import { ICidadesRepository } from "@modules/cities/repositories/ICidadesRepository";
import { Cidades } from "../entities/Cidades";


class CidadesRepository implements ICidadesRepository {

    private repository: Repository<Cidades>;

    constructor(){
        this.repository = getRepository(Cidades);
    }

    async listAllUf(): Promise<string[]> {
        const ufs = await this.repository
        .createQueryBuilder("cidade")
        .select('cidades.uf AS uf')
        .from(Cidades, "cidades")
        .distinct(true)
        .orderBy("cidades.uf")
        .getRawMany();

        return ufs;
    }

    
    async listAllCidadesByUf(uf: string): Promise<Cidades[]> {
        const cidades = await this.repository
       .createQueryBuilder("cidade")
       .select("cidades.id")
       .addSelect("cidades.cidade")
       .addSelect("cidades.uf")
       .from(Cidades, "cidades")
       .where("cidades.uf = :uf", { uf})
       .getMany();

       return cidades;
    }



}

export { CidadesRepository };