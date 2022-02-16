import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUfsUseCase } from "./ListUfsUseCase";

class ListUfsController {

  async handle(request: Request, response: Response): Promise<Response> {
   
    const listUfsUseCase = container.resolve(ListUfsUseCase);

    const ufs = await listUfsUseCase.execute();

    return response.status(200).json(ufs).send();
  }
}

export { ListUfsController };