import { getRepository, Repository } from "typeorm";

import { IPontuacoesResgateRepository } from "@modules/pontuacoes/repositories/IPontuacoesResgateRepository";
import { PontuacoesResgates } from "../entities/PontuacoesResgates";

class PontuacoesResgateRepository implements IPontuacoesResgateRepository {
  private repository: Repository<PontuacoesResgates>;

  constructor() {
    this.repository = getRepository(PontuacoesResgates);
  }
  async listAllRedemptionScores(
    user_id: number,
    idlojista: number
  ): Promise<PontuacoesResgates[]> {
    const pontuacoes_resgate = await this.repository
      .createQueryBuilder("pr")
      .select("pontuacoes_resgates.id")
      .addSelect("pontuacoes_resgates.cliente")
      .addSelect("pontuacoes_resgates.estabelecimento	")
      .addSelect("pontuacoes_resgates.premio")
      .addSelect("pontuacoes_resgates.pontos")
      .addSelect("pontuacoes_resgates.data_resgate")
      .addSelect("pontuacoes_resgates.usuario")
      .from(PontuacoesResgates, "pontuacoes_resgates")
      .where("pontuacoes_resgates.cliente = :user_id", {
        user_id: user_id,
      })
      .andWhere("pontuacoes_resgates.estabelecimento = :idlojista", {
        idlojista: idlojista,
      })
      .getMany();

    return pontuacoes_resgate;
  }
}

export { PontuacoesResgateRepository };
