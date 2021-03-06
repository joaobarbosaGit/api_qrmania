import { Router } from "express";

import { ListRaspadinhaTicketByUserController } from "@modules/raspadinha/useCase/listRapadinhaTicketByUser/ListRaspadinhaTicketByUserController";
import { ListRaspadinhaPremiosByRaspadinhaController } from "@modules/raspadinha/useCase/listRaspadinhaPremiosByRaspadinha/ListRaspadinhaPremiosByRaspadinhaController";
import { isRaspadoController } from "@modules/raspadinha/useCase/isRaspado/isRaspadoController";
import { UpdateRaspadoController } from "@modules/raspadinha/useCase/updateRaspado/UpdateRaspadoController";
import { ListAllRaspadinhaByUserByPremiosController } from "@modules/raspadinha/useCase/listAllRaspadinhasByUserByPremios/ListAllRaspadinhaByUserByPremiosController";
import { GetPremioByRaspadinhaTicketController } from "@modules/raspadinha/useCase/getPremioByRaspadinhaTicket/GetPremioByRaspadinhaTicketController";

const raspadinhaRoutes = Router();

const listRaspadinhaTicketByUserController =
  new ListRaspadinhaTicketByUserController();
const listAllRaspadinhaByUserByPremiosController =
  new ListAllRaspadinhaByUserByPremiosController();
const listRaspadinhaPremiosByRaspadinhaController =
  new ListRaspadinhaPremiosByRaspadinhaController();
const israspadoController = new isRaspadoController();
const updateRaspadoController = new UpdateRaspadoController();
const getPremioByRaspadinhaTicketController = new GetPremioByRaspadinhaTicketController();

raspadinhaRoutes.post(
  "/listraspadinhabyuser",
  listRaspadinhaTicketByUserController.handle
);

raspadinhaRoutes.get(
  "/listallraspadinhabyuserbypremios/:user_id",
  listAllRaspadinhaByUserByPremiosController.handle
);
raspadinhaRoutes.post(
  "/listraspadinhapremiosbyraspadinha",
  listRaspadinhaPremiosByRaspadinhaController.handle
);
//raspadinhaRoutes.post("/israspado", israspadoController.handle);
raspadinhaRoutes.put("/updateraspado", updateRaspadoController.handle);
raspadinhaRoutes.post("/getpremiobyraspadinhaticket", getPremioByRaspadinhaTicketController.handle);

export { raspadinhaRoutes };
