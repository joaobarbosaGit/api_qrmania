import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListEstabelecimentoWithPointsByUserUseCase } from "./ListEstabelecimentoWithPointsByUserUseCase";

class ListEstabelecimentoWithPointsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const listEstabelecimentoWithPointsByUserUseCase = container.resolve(
      ListEstabelecimentoWithPointsByUserUseCase
    );

    const pontuacoesHistorico =
      await listEstabelecimentoWithPointsByUserUseCase.execute({
        user_id,
      });

    return response.status(200).json(pontuacoesHistorico).send();
  }
}

export { ListEstabelecimentoWithPointsByUserController };
