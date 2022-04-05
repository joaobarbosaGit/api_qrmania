import { getRepository, Repository } from "typeorm";

import { IPontuacoesRepository } from "@modules/pontuacoes/repositories/IPontuacoesRepository";
import { Pontuacoes } from "../entities/Pontuacoes";

class PontuacoesRepository implements IPontuacoesRepository {
  private repository: Repository<Pontuacoes>;

  constructor() {
    this.repository = getRepository(Pontuacoes);
  }

  async countPontuacoesByUserAndByEstabelecimento(
    user_id: number,
    estabelecimento_id: number
  ): Promise<number> {
    const pontos = await this.repository
      .createQueryBuilder("pontuacoes")
      .select("SUM(pontuacoes.pontos)", "pontos")
      .where("pontuacoes.user_id = :id", { id: user_id })
      .andWhere("pontuacoes.estabelecimento_id = :estabelecimento_id", {
        estabelecimento_id: estabelecimento_id,
      })
      .andWhere("pontuacoes.status = 1")
      .getRawOne();

    return pontos;
  }

  async countPontuacoes(user_id: number): Promise<number> {
    const pontos = await this.repository
      .createQueryBuilder("pontuacoes")
      .select("SUM(pontuacoes.pontos)", "pontos")
      .where("pontuacoes.user_id = :id", { id: user_id })
      .andWhere("pontuacoes.status = 1")
      .getRawOne();

    return pontos;
  }

  async listAllEstabelecimentosWithPointsByUser(
    user_id: number
  ): Promise<Pontuacoes[]> {
    const listEstabelecimentos = await this.repository
      .createQueryBuilder("pta")
      .select("pontuacoes.id")
      .addSelect("pontuacoes.pontos")
      .addSelect("pontuacoes.status")
      .addSelect("pontuacoes.deleted")
      .addSelect("pontuacoes.user_id")
      .addSelect("pontuacoes.created_at")
      .addSelect("pontuacoes.updated_at")
      .addSelect("pontuacoes.estabelecimento_id")
      .from(Pontuacoes, "pontuacoes")
      .where("pontuacoes.user_id  = :user_id", {
        user_id: user_id,
      })
      .andWhere("pontuacoes.pontos > 0")
      .leftJoinAndSelect(
        "pontuacoes.dados_estabelecimento",
        "dados_estabelecimento"
      )
      .getMany();

    return listEstabelecimentos;
  }
}

export { PontuacoesRepository };
