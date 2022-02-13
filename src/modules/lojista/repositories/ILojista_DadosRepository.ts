import { Lojista_Dados } from "../infra/typeorm/entities/lojista_dados";

interface ILojista_DadosRepository {

    findLojista_DadosByUsers_Id(users_id: number): Promise<Lojista_Dados>;

}

export { ILojista_DadosRepository };