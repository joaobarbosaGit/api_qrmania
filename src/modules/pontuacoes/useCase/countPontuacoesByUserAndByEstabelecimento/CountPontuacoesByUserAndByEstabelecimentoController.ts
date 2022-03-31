import { Request, Response } from "express";
import { container } from "tsyringe";

import { CountPontuacoesByUserAndByEstabelecimentoUseCase } from "./CountPontuacoesByUserAndByEstabelecimentoUseCase";

class CountPontuacoesByUserAndByEstabelecimentoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, estabelecimento_id } = request.body;

    const countPontuacoesByUserAndByEstabelecimentoUseCase = container.resolve(
      CountPontuacoesByUserAndByEstabelecimentoUseCase
    );

    const pontos =
      await countPontuacoesByUserAndByEstabelecimentoUseCase.execute({
        user_id,
        estabelecimento_id,
      });

    return response.status(200).json(pontos).send();
  }
}

export { CountPontuacoesByUserAndByEstabelecimentoController };
