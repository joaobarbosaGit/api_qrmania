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
      .createQueryBuilder("raspadinha_ticket")
      .where("raspadinha_ticket.user_id = :user_id", { user_id })
      .andWhere("raspadinha_ticket.raspado = :raspado", { raspado: 0 })
      .getMany();

    return raspadinha;
  }
}

export { RaspadinhaRepository };
