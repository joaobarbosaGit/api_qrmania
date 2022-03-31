import { Router } from "express";

import { CountPontuacoesController } from "@modules/pontuacoes/useCase/countPontuacoes/CountPontuacoesController";
import { ListAllRewardsAndRedemptionPointsController } from "@modules/pontuacoes/useCase/listAllRewardsAndRedemptionPoints/ListAllRewardsAndRedemptionPointsController";
import { ListAllPointsHistoryController } from "@modules/pontuacoes/useCase/listAllPointsHistory/ListAllPointsHistoryController";
import { ListAllRedemptionScoresController } from "@modules/pontuacoes/useCase/listAllRedemptionScores/ListAllRedemptionScoresController";
import { CountPontuacoesByUserAndByEstabelecimentoController } from "@modules/pontuacoes/useCase/countPontuacoesByUserAndByEstabelecimento/CountPontuacoesByUserAndByEstabelecimentoController";

const pontosRoutes = Router();

const countPontuacoesController = new CountPontuacoesController();
const countPontuacoesByUserAndByEstabelecimentoController =
  new CountPontuacoesByUserAndByEstabelecimentoController();
const listAllRewardsAndRedemptionPointsController =
  new ListAllRewardsAndRedemptionPointsController();

const listAllPointsHistoryController = new ListAllPointsHistoryController();
const listAllRedemptionScoresController =
  new ListAllRedemptionScoresController();

pontosRoutes.post("/countpontuacao", countPontuacoesController.handle);

pontosRoutes.post(
  "/countpontuacaobyuserandestabelecimento",
  countPontuacoesByUserAndByEstabelecimentoController.handle
);

pontosRoutes.post(
  "/listallpremios",
  listAllRewardsAndRedemptionPointsController.handle
);

pontosRoutes.post(
  "/listallredemptionscores",
  listAllRedemptionScoresController.handle
);

pontosRoutes.post(
  "/listallpointshistory",
  listAllPointsHistoryController.handle
);

export { pontosRoutes };
