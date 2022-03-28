import { IPontuacoesHistoricoRepository } from "@modules/pontuacoes/repositories/IPontuacoesHistoricoRepository";
import { getRepository, Repository } from "typeorm";

import { PontuacoesHistorico } from "../entities/PontuacoesHistorico";

class PontuacoesHistoricoRepository implements IPontuacoesHistoricoRepository {
  private repository: Repository<PontuacoesHistorico>;

  constructor() {
    this.repository = getRepository(PontuacoesHistorico);
  }

  async listAllPointsHistory(
    pontuacao_id: number
  ): Promise<PontuacoesHistorico[]> {
    const pontuacoes_historico = await this.repository
      .createQueryBuilder("ph")
      .select("pontuacoes_historico.id")
      .addSelect("pontuacoes_historico.pontos")
      .addSelect("pontuacoes_historico.pontuacao_id")
      .addSelect("pontuacoes_historico.created_at")
      .addSelect("pontuacoes_historico.updated_at")
      .addSelect("pontuacoes_historico.tipo")
      .from(PontuacoesHistorico, "pontuacoes_historico")
      .where("pontuacoes_historico.pontuacao_id = :pontuacao_id", {
        pontuacao_id: pontuacao_id,
      })
      .getMany();

    return pontuacoes_historico;
  }
}

export { PontuacoesHistoricoRepository };
