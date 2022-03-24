import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListQrCodeFidelidadeUseCase } from "./ListQrCodeFidelidadeUseCase";

class ListQrCodeFidelidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idlojista } = request.body;

    const listQrCodeFidelidadeUseCase = container.resolve(
      ListQrCodeFidelidadeUseCase
    );

    const qrcode_fidelidade = await listQrCodeFidelidadeUseCase.execute({
      idlojista,
    });

    return response.status(200).json(qrcode_fidelidade).send();
  }
}

export { ListQrCodeFidelidadeController };
