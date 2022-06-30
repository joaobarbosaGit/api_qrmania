import { inject, injectable } from "tsyringe";

import { IPontuacoesPremiosRepository } from "@modules/pontuacoes/repositories/IPontuacoesPremiosRepository";
import { IListAllPremiosDTO } from "@modules/pontuacoes/dtos/IListAllPremiosDTO";
import { PontuacoesPremios } from "@modules/pontuacoes/infra/typeorm/entities/PontuacoesPremios";

@injectable()
class ListAllRewardsAndRedemptionPointsUseCase {
  constructor(
    @inject("PontuacoesPremiosRepository")
    private pontuacoesPremiosRepository: IPontuacoesPremiosRepository
  ) {}

  async execute({ user_id }: IListAllPremiosDTO): Promise<PontuacoesPremios[]> {
    const qrcode_fidelidade =
      await this.pontuacoesPremiosRepository.listAllRewardsAndRedemptionPoints(
        user_id
      );
    
    let i = 0;  
    for (const qrcode of qrcode_fidelidade) {  
      qrcode_fidelidade[i]['foto'] = "https://"+qrcode_fidelidade[i]['foto']; 
      i++;
    }  
    return qrcode_fidelidade;
  }
}

export { ListAllRewardsAndRedemptionPointsUseCase };
