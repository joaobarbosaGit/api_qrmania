import { inject, injectable } from "tsyringe";

import { IIsRaspadoDTO } from "@modules/raspadinha/dtos/IIsRaspadoDTO";
import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";
import { Raspadinha_Ticket } from "@modules/raspadinha/infra/typeorm/entities/Raspadinha_Ticket";
import { AppError } from "@shared/erros/AppError";

@injectable()
class isRaspadoUseCase {
  constructor(
    @inject("RaspadinhaTicketRepository")
    private raspadinhaTicketRepository: IRaspadinha_TicketRepository
  ) {}

  async execute({
    idraspadinha_tickets,
  }: IIsRaspadoDTO): Promise<Raspadinha_Ticket | AppError> {
    const raspadinha_tickets = await this.raspadinhaTicketRepository.isRaspado(
      idraspadinha_tickets
    );

    return raspadinha_tickets;
  }
}

export { isRaspadoUseCase };
