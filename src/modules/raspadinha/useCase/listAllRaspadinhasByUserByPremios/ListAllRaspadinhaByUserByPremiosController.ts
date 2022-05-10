import { AppError } from "@shared/erros/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllRaspadinhaByUserByPremiosUseCase } from "./ListAllRaspadinhaByUserByPremiosUseCase";

class ListAllRaspadinhaByUserByPremiosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const listAllRaspadinhaByUserByPremiosUseCase = container.resolve(
      ListAllRaspadinhaByUserByPremiosUseCase
    );

    const raspadinhas = await listAllRaspadinhaByUserByPremiosUseCase.execute(
      Number.parseInt(user_id)
    );

    if (raspadinhas instanceof AppError) {
      return response.status(400).json(raspadinhas.message).send();
    }

    return response.status(200).json(raspadinhas).send();
  }
}

export { ListAllRaspadinhaByUserByPremiosController };
