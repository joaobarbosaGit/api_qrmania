import { Router } from "express";

import { CountPontuacoesController } from "@modules/pontuacoes/useCase/countPontuacoes/CountPontuacoesController";
import { ListAllRewardsAndRedemptionPointsController } from "@modules/pontuacoes/useCase/listAllRewardsAndRedemptionPoints/ListAllRewardsAndRedemptionPointsController";

const pontosRoutes = Router();

const countPontuacoesController = new CountPontuacoesController();
const listAllRewardsAndRedemptionPointsController =
  new ListAllRewardsAndRedemptionPointsController();

pontosRoutes.post("/countpontuacao", countPontuacoesController.handle);
pontosRoutes.post(
  "/listallpremios",
  listAllRewardsAndRedemptionPointsController.handle
);

export { pontosRoutes };
