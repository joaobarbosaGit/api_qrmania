import { QrCodeFidelidadeHistorico } from "../infra/typeorm/entities/QrCodeFidelidadeHistorico";

interface IQrCodeFidelidadeHistoricoRepository {
  listAllQrCodeFidelidadeHistoricoByUserAndByQrCodeFidelidade(
    idusuario: number,
    idqrcode_fidelidade: number
  ): Promise<QrCodeFidelidadeHistorico[]>;
}

export { IQrCodeFidelidadeHistoricoRepository };
