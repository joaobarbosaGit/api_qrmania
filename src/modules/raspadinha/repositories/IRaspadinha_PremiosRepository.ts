import { Raspadinha_Premios } from "../infra/typeorm/entities/Raspadinha_Premios";

interface IRaspadinha_PremiosRepository {

    listAllRaspadinha_PremiosByRaspadinha(raspadinha_id: number) : Promise<Raspadinha_Premios[]>

}

export { IRaspadinha_PremiosRepository };