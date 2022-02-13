import { Request, Response } from "express";
import { container } from "tsyringe";
import { CountPontuacoesUseCase } from "./CountPontuacoesUseCase";


class CountPontuacoesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const countPontuacoesUseCase = container.resolve(CountPontuacoesUseCase);

    const pontos = await countPontuacoesUseCase.execute({user_id});

    return response.status(200).json(pontos).send();
  }
}

export { CountPontuacoesController };