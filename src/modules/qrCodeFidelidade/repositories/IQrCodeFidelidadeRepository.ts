import { QrCodeFidelidade } from "../infra/typeorm/entities/QrCodeFidelidade";

interface IQrCodeFidelidadeRepository {

    listAllQrCodeFidelidadeByUser(idlojista:number) : Promise<QrCodeFidelidade[]>

}

export { IQrCodeFidelidadeRepository };