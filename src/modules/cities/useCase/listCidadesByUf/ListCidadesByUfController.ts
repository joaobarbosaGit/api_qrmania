import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCidadesByUfUseCase } from "./ListCidadesByUfUseCase";

class ListCidadesByUfController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { uf } = request.body;

    const listCidadesByUfUseCase = container.resolve(ListCidadesByUfUseCase);

    const cidades = await listCidadesByUfUseCase.execute({uf});

    return response.status(200).json(cidades).send();
  }
}

export { ListCidadesByUfController };