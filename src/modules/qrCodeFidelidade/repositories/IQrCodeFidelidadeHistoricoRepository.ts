import { QrCodeFidelidadeHistorico } from "../infra/typeorm/entities/QrCodeFidelidadeHistorico";

interface IQrCodeFidelidadeHistoricoRepository {
  listAllQrCodeFidelidadeHistoricoByUserAndByQrCodeFidelidade(
    idusuario: number
  ): Promise<QrCodeFidelidadeHistorico[]>;
}

export { IQrCodeFidelidadeHistoricoRepository };
