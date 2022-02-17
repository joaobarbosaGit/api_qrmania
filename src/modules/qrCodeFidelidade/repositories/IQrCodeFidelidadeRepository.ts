import { QrCodeFidelidade } from "../infra/typeorm/entities/QrCodeFidelidade";
import { ICreateQrCodeFidelidadeDTO } from "../dtos/ICreateQrCodeFidelidadeDTO";

interface IQrCodeFidelidadeRepository {

    listAllQrCodeFidelidadeByUser(idlojista:number) : Promise<QrCodeFidelidade[]>
    createQrCodeFidelidade(data:ICreateQrCodeFidelidadeDTO): Promise<void>

}

export { IQrCodeFidelidadeRepository };