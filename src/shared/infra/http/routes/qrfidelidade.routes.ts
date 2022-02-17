import { Router } from "express";

import { ListQrCodeFidelidadeController } from "@modules/qrCodeFidelidade/useCase/listQrCodeFidelidade/ListQrCodeFidelidadeController";
import { CreateQrCodeFidelidadeController } from "@modules/qrCodeFidelidade/useCase/createQrCodeFidelidade/CreateQrCodeFidelidadeController";

const qrfidelidadeRoutes = Router();

const listQrCodeFidelidadeController = new ListQrCodeFidelidadeController();
const createQrCodeFidelidadeController = new CreateQrCodeFidelidadeController();

qrfidelidadeRoutes.post("/listqrcodefidelidade", listQrCodeFidelidadeController.handle);
qrfidelidadeRoutes.post("/createqrcodefidelidade", createQrCodeFidelidadeController.handle);


export { qrfidelidadeRoutes };