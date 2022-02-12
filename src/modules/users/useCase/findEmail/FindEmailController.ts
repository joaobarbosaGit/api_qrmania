import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindEmailUserUseCase } from "./FindEmailUseCase";


class FindEmailController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const findemailUseCase = container.resolve(FindEmailUserUseCase);

    const user = await findemailUseCase.execute({email});

    return response.status(200).json(user).send();
  }
}

export { FindEmailController };