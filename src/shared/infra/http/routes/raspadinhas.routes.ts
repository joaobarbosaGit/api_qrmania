import { Router } from "express";

import { ListRaspadinhaTicketByUserController } from "@modules/raspadinha/useCase/listRapadinhaTicketByUser/ListRaspadinhaTicketByUserController";
import { ListRaspadinhaPremiosByRaspadinhaController } from "@modules/raspadinha/useCase/listRaspadinhaPremiosByRaspadinha/ListRaspadinhaPremiosByRaspadinhaController";

const raspadinhaRoutes = Router();

const listRaspadinhaTicketByUserController = new ListRaspadinhaTicketByUserController();
const listRaspadinhaPremiosByRaspadinhaController = new ListRaspadinhaPremiosByRaspadinhaController();

raspadinhaRoutes.post("/listraspadinhabyuser", listRaspadinhaTicketByUserController.handle);
raspadinhaRoutes.post("/listraspadinhapremiosbyraspadinha", listRaspadinhaPremiosByRaspadinhaController.handle);


export { raspadinhaRoutes };