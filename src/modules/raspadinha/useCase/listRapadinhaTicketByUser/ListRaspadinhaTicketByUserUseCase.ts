import { inject, injectable } from "tsyringe";

import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";
import { IListRapadinhasByUserDTO } from "@modules/raspadinha/dtos/IListRapadinhasByUserDTO";
import { Raspadinha_Ticket } from "@modules/raspadinha/infra/typeorm/entities/Raspadinha_Ticket";


@injectable()
class ListRaspadinhaTicketByUserUseCase{

    constructor(
    @inject("RaspadinhaTicketRepository")
    private raspadinhaTicketRepository: IRaspadinha_TicketRepository
    ){};

    async execute( {user_id} : IListRapadinhasByUserDTO) : Promise<Raspadinha_Ticket[]> {

       const raspadinha_tickets = await this.raspadinhaTicketRepository.listAllRaspadinha_TicketByUser(user_id);

       return raspadinha_tickets;
    }
}

export { ListRaspadinhaTicketByUserUseCase };