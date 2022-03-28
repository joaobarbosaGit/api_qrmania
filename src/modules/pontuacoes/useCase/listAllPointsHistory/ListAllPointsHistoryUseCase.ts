import { inject, injectable } from "tsyringe";

import { IPontuacoesHistoricoRepository } from "@modules/pontuacoes/repositories/IPontuacoesHistoricoRepository";
import { IListAllHistoricoPontuacoesDTO } from "@modules/pontuacoes/dtos/IListAllHistoryScoresDTO";
import { PontuacoesHistorico } from "@modules/pontuacoes/infra/typeorm/entities/PontuacoesHistorico";

@injectable()
class ListAllPointsHistoryUseCase {
  constructor(
    @inject("PontuacoesHistoricoRepository")
    private pontuacoesHistoricoRepository: IPontuacoesHistoricoRepository
  ) {}

  async execute({
    pontuacao_id,
  }: IListAllHistoricoPontuacoesDTO): Promise<PontuacoesHistorico[]> {
    const pontuacoes_historico =
      await this.pontuacoesHistoricoRepository.listAllPointsHistory(
        pontuacao_id
      );

    return pontuacoes_historico;
  }
}

export { ListAllPointsHistoryUseCase };
