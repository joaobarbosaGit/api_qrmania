import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateQrCodeFidelidadeUseCase } from "./CreateQrCodeFidelidadeUseCase";
import {Md5} from "md5-typescript";

class CreateQrCodeFidelidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
        nome, 
        tipo, 
        status,
        idlojista, 
        exibir_no_aplicativo,
     } = request.body;

    const createQrCodeFidelidadeUseCase = container.resolve(CreateQrCodeFidelidadeUseCase);

     const token = 'QF'+Md5.init(Math.random()+nome);

    await createQrCodeFidelidadeUseCase.execute({
        nome, 
        tipo, 
        status,
        idlojista, 
        exibir_no_aplicativo,
        token: token
    });

    return response.status(201).send();
  }
}

export { CreateQrCodeFidelidadeController };
