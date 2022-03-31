import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListQrCodeFidelidadeHistoricoUseCase } from "./ListQrCodeFidelidadeHistoricoUseCase";

class ListQrCodeFidelidadeHistoricoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idusuario } = request.body;

    const listQrCodeFidelidadeHistoricoUseCase = container.resolve(
      ListQrCodeFidelidadeHistoricoUseCase
    );

    const qrcode_fidelidade_historico =
      await listQrCodeFidelidadeHistoricoUseCase.execute({
        idusuario,
      });

    return response.status(200).json(qrcode_fidelidade_historico).send();
  }
}

export { ListQrCodeFidelidadeHistoricoController };
