import { getRepository, Repository } from "typeorm";

import { IRaspadinhaRepository } from "@modules/raspadinha/repositories/IRaspadinhaRepository";
import { Raspadinha } from "../entities/Raspadinha";

class RaspadinhaRepository implements IRaspadinhaRepository {
  private repository: Repository<Raspadinha>;

  constructor() {
    this.repository = getRepository(Raspadinha);
  }

  async listAllRaspadinhaByUser(user_id: number): Promise<Raspadinha[]> {
    const raspadinha = await this.repository
      .createQueryBuilder("raspadinha")
      .select("raspadinha.idraspadinha")
      .addSelect("raspadinha.nome")
      .addSelect("raspadinha.total_quantity")
      .addSelect("raspadinha.status")
      .addSelect("raspadinha.estabelecimento_id")
      .addSelect("raspadinha.created_at")
      .addSelect("raspadinha.updated_at")
      .where("raspadinha.estabelecimento_id = :user_id", { user_id })
      .leftJoinAndSelect("raspadinha.raspadinha_tickets", "raspadinha_ticket")
      .leftJoinAndSelect("raspadinha.raspadinha_premios", "raspadinha_premios")
      .getMany();

    return raspadinha;
  }

  async listAllRaspadinhasByUserByPremios(
    user_id: number
  ): Promise<Raspadinha[]> {
    const raspadinha = await this.repository
      .createQueryBuilder("raspadinha")
      .select("raspadinha.idraspadinha")
      .addSelect("raspadinha.nome")
      .addSelect("raspadinha.total_quantity")
      .addSelect("raspadinha.status")
      .addSelect("raspadinha.estabelecimento_id")
      .addSelect("raspadinha.created_at")
      .addSelect("raspadinha.updated_at")
      .where("raspadinha.estabelecimento_id = :user_id", { user_id })
      .leftJoinAndSelect("raspadinha.raspadinha_premios", "raspadinha_premios")
      .getMany();

    return raspadinha;
  }
}

export { RaspadinhaRepository };
