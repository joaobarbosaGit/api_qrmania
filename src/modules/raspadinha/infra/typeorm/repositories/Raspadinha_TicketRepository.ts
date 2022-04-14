import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/erros/AppError";
import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";
import { Raspadinha_Ticket } from "../entities/Raspadinha_Ticket";

class Raspadinha_TicketRepository implements IRaspadinha_TicketRepository {
  private repository: Repository<Raspadinha_Ticket>;

  constructor() {
    this.repository = getRepository(Raspadinha_Ticket);
  }

  async listAllRaspadinha_TicketByUser(
    user_id: number
  ): Promise<Raspadinha_Ticket[]> {
    const raspadinha_tickets = await this.repository
      .createQueryBuilder("raspadinha_ticket")
      .select("raspadinha_ticket.idraspadinha_tickets")
      .addSelect("raspadinha_ticket.status")
      .addSelect("raspadinha_ticket.token")
      .addSelect("raspadinha_ticket.raspadinha_id")
      .addSelect("raspadinha_ticket.user_id")
      .addSelect("raspadinha_ticket.raspadinha_premios_id")
      .addSelect("raspadinha_ticket.created_at")
      .addSelect("raspadinha_ticket.updated_at")
      .addSelect("raspadinha_ticket.raspado")
      .addSelect("raspadinha_ticket.raspado_at")
      .where("raspadinha_ticket.user_id = :user_id", { user_id })
      .andWhere("raspadinha_ticket.raspado = :raspado", { raspado: 0 })
      .leftJoinAndSelect("raspadinha_ticket.raspadinha_id", "raspadinha")
      .getMany();

    return raspadinha_tickets;
  }
}

export { Raspadinha_TicketRepository };
