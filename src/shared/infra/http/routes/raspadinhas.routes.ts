import { Router } from "express";

import { ListRaspadinhaTicketByUserController } from "@modules/raspadinha/useCase/listRapadinhaTicketByUser/ListRaspadinhaTicketByUserController";

const raspadinhaRoutes = Router();

const listRaspadinhaTicketByUserController = new ListRaspadinhaTicketByUserController();

raspadinhaRoutes.post("/listraspadinhabyuser", listRaspadinhaTicketByUserController.handle);


export { raspadinhaRoutes };