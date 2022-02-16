import { Router } from "express";

import { ListQrCodeFidelidadeController } from "@modules/qrCodeFidelidade/useCase/listQrCodeFidelidade/ListQrCodeFidelidadeController";

const qrfidelidadeRoutes = Router();

const listQrCodeFidelidadeController = new ListQrCodeFidelidadeController();

qrfidelidadeRoutes.post("/listqrcodefidelidade", listQrCodeFidelidadeController.handle);


export { qrfidelidadeRoutes };