import { getRepository, Repository } from "typeorm";

import { AppError } from "@shared/erros/AppError";
import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";
import { Raspadinha_Ticket } from "../entities/Raspadinha_Ticket";
import { Raspadinha_Premios } from "../entities/Raspadinha_Premios";


class Raspadinha_TicketRepository implements IRaspadinha_TicketRepository {
  private repository: Repository<Raspadinha_Ticket>;
  private repositoryRaspadinhaPremio: Repository<Raspadinha_Premios>;

  constructor() {
    this.repository = getRepository(Raspadinha_Ticket);
    this.repositoryRaspadinhaPremio = getRepository(Raspadinha_Premios);
  }

  async listAllRaspadinha_TicketByUser(
    user_id: number
  ): Promise<Raspadinha_Ticket[]> {
    const raspadinha_tickets = await this.repository
      .createQueryBuilder("raspadinha_ticket")
      .select("raspadinha_ticket.idraspadinha_tickets")
      .addSelect("raspadinha_ticket.status")
      .addSelect("raspadinha_ticket.sorteada")
      .addSelect("raspadinha_ticket.token")
      .addSelect("raspadinha_ticket.raspadinha_id")
      .addSelect("raspadinha_ticket.user_id")
      .addSelect("raspadinha_ticket.raspadinha_premios_id")
      .addSelect("raspadinha_ticket.created_at")
      .addSelect("raspadinha_ticket.updated_at")
      .addSelect("raspadinha_ticket.raspado")
      .addSelect("raspadinha_ticket.raspado_at")
      .where("raspadinha_ticket.user_id = :user_id", { user_id })
      .leftJoinAndSelect("raspadinha_ticket.raspadinha_id", "raspadinha")
      .getMany();

    return raspadinha_tickets;
  }

  async isRaspado(
    idraspadinha_tickets: number
  ): Promise<Raspadinha_Ticket | AppError> {
    const raspadinha_ticket = await this.repository.findOne(
      idraspadinha_tickets
    );

    if (raspadinha_ticket != null) {
      return raspadinha_ticket;
    } else {
      throw new AppError("Raspadinha not exists!");
    }
  }

  async updateRaspado(idraspadinha_tickets: number): Promise<string> {
    const raspadinha_tickets = await this.repository.findOne(
      idraspadinha_tickets
    );

    if (!raspadinha_tickets) {
      throw new AppError("Raspadinha not exists!");
    }

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    raspadinha_tickets.raspado_at = date + " " + time;
    raspadinha_tickets.raspado = 1;

    await this.repository.save(raspadinha_tickets);

    return Object.assign({
      mensagem: "raspadinha atualizada com sucesso",
    });
  }

  async getPremioByRaspadinhaTicket(idraspadinha_tickets: number): Promise<string>{
    const raspadinhaticket = await this.repository
      .findOne(idraspadinha_tickets);

    const premio = await this.repositoryRaspadinhaPremio.findOne(raspadinhaticket?.raspadinha_premios_id);  

    
    if(!premio){
      throw new AppError("Premio não localizado!");
    }
     

    return premio?.foto as unknown as string;
  }
}

export { Raspadinha_TicketRepository };
