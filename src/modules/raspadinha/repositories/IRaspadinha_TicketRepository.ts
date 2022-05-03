import { AppError } from "@shared/erros/AppError";
import { Raspadinha_Ticket } from "../infra/typeorm/entities/Raspadinha_Ticket";

interface IRaspadinha_TicketRepository {
  listAllRaspadinha_TicketByUser(user_id: number): Promise<Raspadinha_Ticket[]>;
  isRaspado(
    idraspadinha_tickets: number
  ): Promise<Raspadinha_Ticket | AppError>;
}

export { IRaspadinha_TicketRepository };
