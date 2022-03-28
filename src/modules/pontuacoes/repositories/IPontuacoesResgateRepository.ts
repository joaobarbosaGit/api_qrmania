import { PontuacoesResgates } from "../infra/typeorm/entities/PontuacoesResgates";

interface IPontuacoesResgateRepository {
  listAllRedemptionScores(
    user_id: number,
    idlojista: number
  ): Promise<PontuacoesResgates[]>;
}

export { IPontuacoesResgateRepository };
