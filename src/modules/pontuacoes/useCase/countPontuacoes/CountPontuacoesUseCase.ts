import { inject, injectable } from "tsyringe";

import { IPontuacoesRepository } from "@modules/pontuacoes/repositories/IPontuacoesRepository";
import { ICountPontuacoesDTO } from "@modules/pontuacoes/dtos/ICountPontuacoesDTO";

@injectable()
class CountPontuacoesUseCase {
  constructor(
    @inject("PontuacoesRepository")
    private pontuacoesRepository: IPontuacoesRepository
  ) {}

  async execute({ user_id }: ICountPontuacoesDTO): Promise<Number> {
    const pontos = await this.pontuacoesRepository.countPontuacoes(user_id);

    return pontos;
  }
}

export { CountPontuacoesUseCase };
