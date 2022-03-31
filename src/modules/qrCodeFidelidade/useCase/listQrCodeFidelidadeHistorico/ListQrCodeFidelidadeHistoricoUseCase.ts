import { inject, injectable } from "tsyringe";

import { IListQrCodeFidelidadeHistoricoDTO } from "@modules/qrCodeFidelidade/dtos/IListQrCodeFidelidadeHistoricoDTO";
import { IQrCodeFidelidadeHistoricoRepository } from "@modules/qrCodeFidelidade/repositories/IQrCodeFidelidadeHistoricoRepository";
import { QrCodeFidelidadeHistorico } from "@modules/qrCodeFidelidade/infra/typeorm/entities/QrCodeFidelidadeHistorico";

@injectable()
class ListQrCodeFidelidadeHistoricoUseCase {
  constructor(
    @inject("QrCodeFidelidadeHistoricoRepository")
    private qrCodeFidelidadeHistoricoRepository: IQrCodeFidelidadeHistoricoRepository
  ) {}

  async execute({
    idusuario,
    idqrcode_fidelidade,
  }: IListQrCodeFidelidadeHistoricoDTO): Promise<QrCodeFidelidadeHistorico[]> {
    const qrcode_fidelidade_historico =
      await this.qrCodeFidelidadeHistoricoRepository.listAllQrCodeFidelidadeHistoricoByUserAndByQrCodeFidelidade(
        idusuario,
        idqrcode_fidelidade
      );

    return qrcode_fidelidade_historico;
  }
}

export { ListQrCodeFidelidadeHistoricoUseCase };
