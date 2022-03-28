import { PontuacoesHistorico } from "../infra/typeorm/entities/PontuacoesHistorico";

interface IPontuacoesHistoricoRepository {
  listAllPointsHistory(pontuacao_id: number): Promise<PontuacoesHistorico[]>;
}

export { IPontuacoesHistoricoRepository };
