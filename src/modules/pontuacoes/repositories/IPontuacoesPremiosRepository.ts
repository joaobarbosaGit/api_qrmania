import { PontuacoesPremios } from "../infra/typeorm/entities/PontuacoesPremios";

interface IPontuacoesPremiosRepository {
  listAllRewardsAndRedemptionPoints(
    users_id: number
  ): Promise<PontuacoesPremios[]>;
}

export { IPontuacoesPremiosRepository };
