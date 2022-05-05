import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateRaspadoUseCase } from "./UpdateRaspadoUseCase";

class UpdateRaspadoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idraspadinha_tickets } = request.body;

    const updateRaspadoUseCase = container.resolve(UpdateRaspadoUseCase);

    const raspadinha_tickets = await updateRaspadoUseCase.execute({
      idraspadinha_tickets,
    });

    return response.status(200).json(raspadinha_tickets).send();
  }
}

export { UpdateRaspadoController };
