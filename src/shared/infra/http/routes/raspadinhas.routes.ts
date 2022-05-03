import { Router } from "express";

import { ListRaspadinhaTicketByUserController } from "@modules/raspadinha/useCase/listRapadinhaTicketByUser/ListRaspadinhaTicketByUserController";
import { ListRaspadinhaPremiosByRaspadinhaController } from "@modules/raspadinha/useCase/listRaspadinhaPremiosByRaspadinha/ListRaspadinhaPremiosByRaspadinhaController";
import { isRaspadoController } from "@modules/raspadinha/useCase/isRaspado/isRaspadoController";

const raspadinhaRoutes = Router();

const listRaspadinhaTicketByUserController =
  new ListRaspadinhaTicketByUserController();
const listRaspadinhaPremiosByRaspadinhaController =
  new ListRaspadinhaPremiosByRaspadinhaController();
const israspadoController = new isRaspadoController();

raspadinhaRoutes.post(
  "/listraspadinhabyuser",
  listRaspadinhaTicketByUserController.handle
);
raspadinhaRoutes.post(
  "/listraspadinhapremiosbyraspadinha",
  listRaspadinhaPremiosByRaspadinhaController.handle
);
raspadinhaRoutes.post("/israspado", israspadoController.handle);

export { raspadinhaRoutes };
