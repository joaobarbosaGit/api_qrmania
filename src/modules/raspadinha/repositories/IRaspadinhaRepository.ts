import { Raspadinha } from "../infra/typeorm/entities/Raspadinha";

interface IRaspadinhaRepository {
  listAllRaspadinhaByUser(user_id: number): Promise<Raspadinha[]>;
}

export { IRaspadinhaRepository };
