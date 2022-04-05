import { inject, injectable } from "tsyringe";

import { IListAllPremiosDTO } from "@modules/pontuacoes/dtos/IListAllPremiosDTO";
import { Pontuacoes } from "@modules/pontuacoes/infra/typeorm/entities/Pontuacoes";
import { IPontuacoesRepository } from "@modules/pontuacoes/repositories/IPontuacoesRepository";

@injectable()
class ListEstabelecimentoWithPointsByUserUseCase {
  constructor(
    @inject("PontuacoesRepository")
    private pontuacoesRepository: IPontuacoesRepository
  ) {}

  async execute({ user_id }: IListAllPremiosDTO): Promise<Pontuacoes[]> {
    const listEstabelecimentos =
      await this.pontuacoesRepository.listAllEstabelecimentosWithPointsByUser(
        user_id
      );

    return listEstabelecimentos;
  }
}

export { ListEstabelecimentoWithPointsByUserUseCase };
