import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPremioByRaspadinhaTicketUseCase } from "./GetPremioByRaspadinhaTicketUseCase";

class GetPremioByRaspadinhaTicketController {

  async handle(request: Request, response: Response): Promise<Response> {
   
    const { idraspadinha_tickets } = request.body;

    const getPremioByRaspadinhaTicketUseCase = container.resolve(GetPremioByRaspadinhaTicketUseCase);

    const premio = await getPremioByRaspadinhaTicketUseCase.execute(idraspadinha_tickets);

    
    return response.status(200).json(premio).send();
  }
}

export { GetPremioByRaspadinhaTicketController };