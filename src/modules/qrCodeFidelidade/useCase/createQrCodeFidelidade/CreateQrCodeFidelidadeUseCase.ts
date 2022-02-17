import { inject, injectable } from "tsyringe";

import { IQrCodeFidelidadeRepository } from "@modules/qrCodeFidelidade/repositories/IQrCodeFidelidadeRepository";
import { ICreateQrCodeFidelidadeDTO } from "@modules/qrCodeFidelidade/dtos/ICreateQrCodeFidelidadeDTO";

@injectable()
class CreateQrCodeFidelidadeUseCase {
  constructor(
    @inject("QrCodeFidelidadeRepository")
    private qrCodeFidelidadeRepository: IQrCodeFidelidadeRepository
  ) {}

  async execute({
    nome, 
    tipo, 
    status,
    idlojista, 
    exibir_no_aplicativo,
    token
    
  }: ICreateQrCodeFidelidadeDTO): Promise<void> {


    await this.qrCodeFidelidadeRepository.createQrCodeFidelidade({
        nome, 
        tipo, 
        status,
        idlojista, 
        exibir_no_aplicativo,
        token
    });
  }
}

export { CreateQrCodeFidelidadeUseCase };
