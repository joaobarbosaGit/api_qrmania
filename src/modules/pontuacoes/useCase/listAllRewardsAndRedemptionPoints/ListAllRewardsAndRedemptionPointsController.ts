import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllRewardsAndRedemptionPointsUseCase } from "./ListAllRewardsAndRedemptionPointsUseCase";

class ListAllRewardsAndRedemptionPointsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const listQrCodeFidelidadeUseCase = container.resolve(
      ListAllRewardsAndRedemptionPointsUseCase
    );

    const pontuacoesPremios = await listQrCodeFidelidadeUseCase.execute({
      user_id,
    });

    return response.status(200).json(pontuacoesPremios).send();
  }
}

export { ListAllRewardsAndRedemptionPointsController };
