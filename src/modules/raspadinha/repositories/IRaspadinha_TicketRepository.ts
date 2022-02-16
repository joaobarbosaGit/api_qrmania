import { Raspadinha_Ticket } from "../infra/typeorm/entities/Raspadinha_Ticket";

interface IRaspadinha_TicketRepository {

    listAllRaspadinha_TicketByUser(user_id: number) : Promise<Raspadinha_Ticket[]>
}

export { IRaspadinha_TicketRepository };