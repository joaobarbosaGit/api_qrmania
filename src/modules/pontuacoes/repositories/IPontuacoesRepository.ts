import { Pontuacoes } from "../infra/typeorm/entities/Pontuacoes";

interface IPontuacoesRepository {
  countPontuacoes(users_id: number): Promise<number>;
  countPontuacoesByUserAndByEstabelecimento(
    user_id: number,
    estabelecimento_id: number
  ): Promise<number>;
  listAllEstabelecimentosWithPointsByUser(
    user_id: number
  ): Promise<Pontuacoes[]>;
}

export { IPontuacoesRepository };
