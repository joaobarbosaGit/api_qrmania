import { Request, Response } from "express";
import { container } from "tsyringe";

import { isRaspadoUseCase } from "./isRaspadoUseCase";

class isRaspadoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idraspadinha_tickets } = request.body;

    const israspadoUseCase = container.resolve(isRaspadoUseCase);

    const raspadinha_tickets = await israspadoUseCase.execute({
      idraspadinha_tickets,
    });

    return response.status(200).json(raspadinha_tickets).send();
  }
}

export { isRaspadoController };
