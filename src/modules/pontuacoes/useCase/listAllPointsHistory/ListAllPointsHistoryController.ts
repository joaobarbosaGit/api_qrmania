import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllPointsHistoryUseCase } from "./ListAllPointsHistoryUseCase";

class ListAllPointsHistoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { pontuacao_id } = request.body;

    const listAllPointsHistoryUseCase = container.resolve(
      ListAllPointsHistoryUseCase
    );

    const pontuacoesHistorico = await listAllPointsHistoryUseCase.execute({
      pontuacao_id,
    });

    return response.status(200).json(pontuacoesHistorico).send();
  }
}

export { ListAllPointsHistoryController };
