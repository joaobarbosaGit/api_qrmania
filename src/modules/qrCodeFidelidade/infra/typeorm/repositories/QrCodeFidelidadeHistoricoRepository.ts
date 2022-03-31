import { getRepository, Repository } from "typeorm";

import { IQrCodeFidelidadeHistoricoRepository } from "@modules/qrCodeFidelidade/repositories/IQrCodeFidelidadeHistoricoRepository";
import { QrCodeFidelidadeHistorico } from "../entities/QrCodeFidelidadeHistorico";

class QrCodeFidelidadeHistoricoRepository
  implements IQrCodeFidelidadeHistoricoRepository
{
  private repository: Repository<QrCodeFidelidadeHistorico>;

  constructor() {
    this.repository = getRepository(QrCodeFidelidadeHistorico);
  }
  async listAllQrCodeFidelidadeHistoricoByUserAndByQrCodeFidelidade(
    idusuario: number,
    idqrcode_fidelidade: number
  ): Promise<QrCodeFidelidadeHistorico[]> {
    const qr_code_fidelidade_historico = await this.repository
      .createQueryBuilder("qr_fidelidade_historico")
      .select("qrcode_fidelidade_historico.idqrcode_fidelidade_historico")
      .addSelect("qrcode_fidelidade_historico.date_used")
      .addSelect("qrcode_fidelidade_historico.uso_identificador")
      .addSelect("qrcode_fidelidade_historico.idusuario")
      .addSelect("qrcode_fidelidade_historico.idqrcode_fidelidade")
      .addSelect("qrcode_fidelidade_historico.created_at")
      .addSelect("qrcode_fidelidade_historico.updated_at")
      .addSelect("qrcode_fidelidade_historico.cpf_usuario")
      .addSelect("qrcode_fidelidade_historico.valor_total")
      .addSelect("qrcode_fidelidade_historico.valor_desconto")
      .from(QrCodeFidelidadeHistorico, "qrcode_fidelidade_historico")
      .where("qrcode_fidelidade_historico.idusuario = :idusuario", {
        idusuario: idusuario,
      })
      .andWhere(
        "qrcode_fidelidade_historico.idqrcode_fidelidade = :idqrcode_fidelidade",
        {
          idqrcode_fidelidade: idqrcode_fidelidade,
        }
      )
      .getMany();

    return qr_code_fidelidade_historico;
  }
}

export { QrCodeFidelidadeHistoricoRepository };
