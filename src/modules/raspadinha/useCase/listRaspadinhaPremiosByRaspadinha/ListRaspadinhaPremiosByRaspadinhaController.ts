import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRaspadinhaPremiosByRaspadinhaUseCase } from "./ListRaspadinhaPremiosByRaspadinhaUseCase";


class ListRaspadinhaPremiosByRaspadinhaController {

  async handle(request: Request, response: Response): Promise<Response> {
   
    const { raspadinha_id } = request.body;

    const listRaspadinhaPremiosByRaspadinhaUseCase = container.resolve(ListRaspadinhaPremiosByRaspadinhaUseCase);

    const raspadinha_premios = await listRaspadinhaPremiosByRaspadinhaUseCase.execute({raspadinha_id});

    return response.status(200).json(raspadinha_premios).send();
  }
}

export { ListRaspadinhaPremiosByRaspadinhaController };