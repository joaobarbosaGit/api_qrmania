import { getRepository, Repository } from "typeorm";

import { IPontuacoesPremiosRepository } from "@modules/pontuacoes/repositories/IPontuacoesPremiosRepository";
import { PontuacoesPremios } from "../entities/PontuacoesPremios";

class PontuacoesPremiosRepository implements IPontuacoesPremiosRepository {
  private repository: Repository<PontuacoesPremios>;

  constructor() {
    this.repository = getRepository(PontuacoesPremios);
  }

  async listAllRewardsAndRedemptionPoints(
    estabelecimento_id: number
  ): Promise<PontuacoesPremios[]> {
    const pontuacoes_premios = await this.repository
      .createQueryBuilder("pt")
      .select("pontuacoes_premios.id")
      .addSelect("pontuacoes_premios.titulo")
      .addSelect("pontuacoes_premios.descricao")
      .addSelect("CONCAT('https://',pontuacoes_premios.foto)")
      .addSelect("pontuacoes_premios.pontos")
      .addSelect("pontuacoes_premios.estabelecimento_id")
      .addSelect("pontuacoes_premios.status")
      .from(PontuacoesPremios, "pontuacoes_premios")
      .where("pontuacoes_premios.estabelecimento_id = :estabelecimento_id", {
        estabelecimento_id: estabelecimento_id,
      })
      .getMany();

    return pontuacoes_premios;
  }
}

export { PontuacoesPremiosRepository };
