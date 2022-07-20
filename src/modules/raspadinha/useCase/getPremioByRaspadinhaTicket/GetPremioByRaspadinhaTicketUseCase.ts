import { inject, injectable } from "tsyringe";

import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";


@injectable()
class GetPremioByRaspadinhaTicketUseCase {

    constructor(
        @inject("RaspadinhaTicketRepository")
        private raspadinhaTicketRepository: IRaspadinha_TicketRepository
    ) { };

    async execute(idraspadinha_tickets: number): Promise<string> {

        const premio = await this.raspadinhaTicketRepository.getPremioByRaspadinhaTicket(idraspadinha_tickets);
        console.log(premio);
        return premio;
    }
}

export { GetPremioByRaspadinhaTicketUseCase };