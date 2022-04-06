import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllPontosHistoricoByUserByEstabelecimentoUseCase } from "./ListAllPontosHistoricoByUserByEstabelecimentoUseCase";

class ListAllPontosHistoricoByUserByEstabelecimentoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, estabelecimento_id } = request.body;

    const listAllPontosHistoricoByUserByEstabelecimentoUseCase =
      container.resolve(ListAllPontosHistoricoByUserByEstabelecimentoUseCase);

    const pontuacoesHistorico =
      await listAllPontosHistoricoByUserByEstabelecimentoUseCase.execute({
        user_id,
        estabelecimento_id,
      });

    return response.status(200).json(pontuacoesHistorico).send();
  }
}

export { ListAllPontosHistoricoByUserByEstabelecimentoController };
