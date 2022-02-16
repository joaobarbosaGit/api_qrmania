import { inject, injectable } from "tsyringe";

import { IQrCodeFidelidadeRepository } from "@modules/qrCodeFidelidade/repositories/IQrCodeFidelidadeRepository";
import { QrCodeFidelidade } from "@modules/qrCodeFidelidade/infra/typeorm/entities/QrCodeFidelidade";
import { IListQrCodeFidelidadeByUserDTO } from "@modules/qrCodeFidelidade/dtos/IListQrCodeFidelidadeByUserDTO";

@injectable()
class ListQrCodeFidelidadeUseCase{

    constructor(
    @inject("QrCodeFidelidadeRepository")
    private qrCodeFidelidadeRepository: IQrCodeFidelidadeRepository
    ){};

    async execute( {idlojista} : IListQrCodeFidelidadeByUserDTO) : Promise< QrCodeFidelidade[]> {

       const qrcode_fidelidade = await this.qrCodeFidelidadeRepository.listAllQrCodeFidelidadeByUser(idlojista);

       return qrcode_fidelidade;
    }
}

export { ListQrCodeFidelidadeUseCase };