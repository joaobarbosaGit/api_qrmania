import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllRedemptionScoresUseCase } from "./ListAllRedemptionScoresUseCase";

class ListAllRedemptionScoresController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, idlojista } = request.body;

    const listAllRedemptionScoresUseCase = container.resolve(
      ListAllRedemptionScoresUseCase
    );

    const pontuacoesResgate = await listAllRedemptionScoresUseCase.execute({
      user_id,
      idlojista,
    });

    return response.status(200).json(pontuacoesResgate).send();
  }
}

export { ListAllRedemptionScoresController };
