import { inject, injectable } from "tsyringe";

import { IPontuacoesRepository } from "@modules/pontuacoes/repositories/IPontuacoesRepository";
import { ICountPontuacoesByUserAndByEstabelecimentoDTO } from "@modules/pontuacoes/dtos/ICountPontuacoesByUserAndByEstabelecimentoDTO";

@injectable()
class CountPontuacoesByUserAndByEstabelecimentoUseCase {
  constructor(
    @inject("PontuacoesRepository")
    private pontuacoesRepository: IPontuacoesRepository
  ) {}

  async execute({
    user_id,
    estabelecimento_id,
  }: ICountPontuacoesByUserAndByEstabelecimentoDTO): Promise<Number> {
    const pontos =
      await this.pontuacoesRepository.countPontuacoesByUserAndByEstabelecimento(
        user_id,
        estabelecimento_id
      );

    return pontos;
  }
}

export { CountPontuacoesByUserAndByEstabelecimentoUseCase };
