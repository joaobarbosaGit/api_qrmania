import { Router } from "express";

import { ListQrCodeFidelidadeController } from "@modules/qrCodeFidelidade/useCase/listQrCodeFidelidade/ListQrCodeFidelidadeController";
import { CreateQrCodeFidelidadeController } from "@modules/qrCodeFidelidade/useCase/createQrCodeFidelidade/CreateQrCodeFidelidadeController";
import { ListQrCodeFidelidadeHistoricoController } from "@modules/qrCodeFidelidade/useCase/listQrCodeFidelidadeHistorico/ListQrCodeFidelidadeHistoricoController";

const qrfidelidadeRoutes = Router();

const listQrCodeFidelidadeController = new ListQrCodeFidelidadeController();
const createQrCodeFidelidadeController = new CreateQrCodeFidelidadeController();
const listQrCodeFidelidadeHistoricoController =
  new ListQrCodeFidelidadeHistoricoController();

qrfidelidadeRoutes.post(
  "/listqrcodefidelidade",
  listQrCodeFidelidadeController.handle
);
qrfidelidadeRoutes.post(
  "/createqrcodefidelidade",
  createQrCodeFidelidadeController.handle
);
qrfidelidadeRoutes.post(
  "/listqrcodefidelidadehistorico",
  listQrCodeFidelidadeHistoricoController.handle
);

export { qrfidelidadeRoutes };
