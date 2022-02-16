import { Cidades } from "../infra/typeorm/entities/Cidades";

interface ICidadesRepository {

    listAllCidadesByUf(uf: string) : Promise<Cidades[]>
    listAllUf() : Promise<string[]>
}

export { ICidadesRepository };