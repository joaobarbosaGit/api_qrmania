import { Lojista_Dados } from "../infra/typeorm/entities/Lojista_Dados";

interface ILojista_DadosRepository {
  findLojista_DadosByUsers_Id(users_id: number): Promise<Lojista_Dados>;
}

export { ILojista_DadosRepository };
