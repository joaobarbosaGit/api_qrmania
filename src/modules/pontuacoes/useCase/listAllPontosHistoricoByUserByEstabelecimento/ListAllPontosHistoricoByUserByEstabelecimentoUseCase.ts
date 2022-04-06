import { inject, injectable } from "tsyringe";

import { IPontuacoesRepository } from "@modules/pontuacoes/repositories/IPontuacoesRepository";
import { IListPontuacoesByUserByEstabelecimentoDTO } from "@modules/pontuacoes/dtos/IListPontuacoesByUserByEstabelecimentoDTO";
import { Pontuacoes } from "@modules/pontuacoes/infra/typeorm/entities/Pontuacoes";

@injectable()
class ListAllPontosHistoricoByUserByEstabelecimentoUseCase {
  constructor(
    @inject("PontuacoesRepository")
    private pontuacoesRepository: IPontuacoesRepository
  ) {}

  async execute({
    user_id,
    estabelecimento_id,
  }: IListPontuacoesByUserByEstabelecimentoDTO): Promise<Pontuacoes[]> {
    const listPontuacoesHistorico =
      await this.pontuacoesRepository.listAllPontosHistoricoByUserByEstabelecimento(
        user_id,
        estabelecimento_id
      );

    return listPontuacoesHistorico;
  }
}

export { ListAllPontosHistoricoByUserByEstabelecimentoUseCase };
