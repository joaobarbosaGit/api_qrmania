import { Router } from "express";

import { CountPontuacoesController } from "@modules/pontuacoes/useCase/countPontuacoes/CountPontuacoesController";

const pontosRoutes = Router();

const countPontuacoesController = new CountPontuacoesController();

pontosRoutes.post("/countpontuacao", countPontuacoesController.handle);


export { pontosRoutes };