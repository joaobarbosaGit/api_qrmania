import { inject, injectable } from "tsyringe";

import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";
import { IIsRaspadoDTO } from "@modules/raspadinha/dtos/IIsRaspadoDTO";

@injectable()
class UpdateRaspadoUseCase {
  constructor(
    @inject("RaspadinhaTicketRepository")
    private raspadinhaTicketRepository: IRaspadinha_TicketRepository
  ) {}

  async execute({ idraspadinha_tickets }: IIsRaspadoDTO): Promise<string> {
    const retorno = await this.raspadinhaTicketRepository.updateRaspado(
      idraspadinha_tickets
    );

    return retorno;
  }
}

export { UpdateRaspadoUseCase };
