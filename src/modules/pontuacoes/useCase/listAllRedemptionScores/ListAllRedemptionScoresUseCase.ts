import { inject, injectable } from "tsyringe";

import { IPontuacoesResgateRepository } from "@modules/pontuacoes/repositories/IPontuacoesResgateRepository";
import { IListAllRedemptionScoresDTO } from "@modules/pontuacoes/dtos/IListAllRedemptionSocresDTO";
import { PontuacoesResgates } from "@modules/pontuacoes/infra/typeorm/entities/PontuacoesResgates";

@injectable()
class ListAllRedemptionScoresUseCase {
  constructor(
    @inject("PontuacoesRegatesoRepository")
    private pontuacoesRegatesoRepository: IPontuacoesResgateRepository
  ) {}

  async execute({
    user_id,
    idlojista,
  }: IListAllRedemptionScoresDTO): Promise<PontuacoesResgates[]> {
    const pontuacoes_regates =
      await this.pontuacoesRegatesoRepository.listAllRedemptionScores(
        user_id,
        idlojista
      );

    return pontuacoes_regates;
  }
}

export { ListAllRedemptionScoresUseCase };
