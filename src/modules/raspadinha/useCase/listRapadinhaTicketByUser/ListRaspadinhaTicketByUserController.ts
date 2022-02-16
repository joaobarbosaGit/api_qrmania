import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRaspadinhaTicketByUserUseCase } from "./ListRaspadinhaTicketByUserUseCase";

class ListRaspadinhaTicketByUserController {

  async handle(request: Request, response: Response): Promise<Response> {
   
    const { user_id } = request.body;

    const listRaspadinhaTicketByUserUseCase = container.resolve(ListRaspadinhaTicketByUserUseCase);

    const raspadinha_tickets = await listRaspadinhaTicketByUserUseCase.execute({user_id});

    return response.status(200).json(raspadinha_tickets).send();
  }
}

export { ListRaspadinhaTicketByUserController };