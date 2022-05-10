import { inject, injectable } from "tsyringe";

import { IRaspadinhaRepository } from "@modules/raspadinha/repositories/IRaspadinhaRepository";
import { Raspadinha } from "@modules/raspadinha/infra/typeorm/entities/Raspadinha";

@injectable()
class ListAllRaspadinhaByUserByPremiosUseCase {
  constructor(
    @inject("RaspadinhaRepository")
    private raspadinhaRepository: IRaspadinhaRepository
  ) {}

  async execute(user_id: number): Promise<Raspadinha[]> {
    const raspadinhas =
      await this.raspadinhaRepository.listAllRaspadinhasByUserByPremios(
        user_id
      );

    return raspadinhas;
  }
}

export { ListAllRaspadinhaByUserByPremiosUseCase };
