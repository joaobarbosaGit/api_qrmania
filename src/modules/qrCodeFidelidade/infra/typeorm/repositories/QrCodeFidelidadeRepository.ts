import { getRepository, Repository } from "typeorm";

import { IQrCodeFidelidadeRepository } from "@modules/qrCodeFidelidade/repositories/IQrCodeFidelidadeRepository";
import { QrCodeFidelidade } from "../entities/QrCodeFidelidade";
import { ICreateQrCodeFidelidadeDTO } from "@modules/qrCodeFidelidade/dtos/ICreateQrCodeFidelidadeDTO";

class QrCodeFidelidadeRepository implements IQrCodeFidelidadeRepository {
  private repository: Repository<QrCodeFidelidade>;

  constructor() {
    this.repository = getRepository(QrCodeFidelidade);
  }

  async listAllQrCodeFidelidadeByUser(
    idlojista: number
  ): Promise<QrCodeFidelidade[]> {
    const qr_code_fidelidade = await this.repository
      .createQueryBuilder("qr")
      .select("qrcode_fidelidade.idqrcode_fidelidade")
      .addSelect("qrcode_fidelidade.nome")
      .addSelect("qrcode_fidelidade.tipo")
      .addSelect("qrcode_fidelidade.status")
      .addSelect("qrcode_fidelidade.created_at")
      .addSelect("qrcode_fidelidade.token")
      .addSelect("qrcode_fidelidade.idlojista")
      .addSelect("qrcode_fidelidade.exibir_no_aplicativo")
      .from(QrCodeFidelidade, "qrcode_fidelidade")
      .leftJoinAndSelect(
        "qrcode_fidelidade.qrcode_fidelidade_produtos",
        "qrcode_fidelidade_produtos"
      )
      .where("qrcode_fidelidade.idlojista = :idlojista", {
        idlojista: idlojista,
      })
      .andWhere(
        "qrcode_fidelidade.exibir_no_aplicativo = :exibir_no_aplicativo",
        { exibir_no_aplicativo: "SIM" }
      )
      .getMany();

    return qr_code_fidelidade;
  }

  async createQrCodeFidelidade({
    nome,
    tipo,
    status,
    idlojista,
    exibir_no_aplicativo,
    token,
  }: ICreateQrCodeFidelidadeDTO): Promise<void> {
    const qr_code_fidelidade = this.repository.create({
      nome,
      tipo,
      status,
      idlojista,
      exibir_no_aplicativo,
      token,
    });

    await this.repository.save(qr_code_fidelidade);
  }
}

export { QrCodeFidelidadeRepository };
