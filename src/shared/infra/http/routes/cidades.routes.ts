import { Router } from "express";

import { ListUfsController } from "@modules/cities/useCase/listUfs/ListUfsController";
import { ListCidadesByUfController } from "@modules/cities/useCase/listCidadesByUf/ListCidadesByUfController";

const cidadesRoutes = Router();

const listUfsController = new ListUfsController();
const listCidadesByUfController = new ListCidadesByUfController();

cidadesRoutes.get("/listufs", listUfsController.handle);
cidadesRoutes.post("/listcidadesbyuf", listCidadesByUfController.handle);


export { cidadesRoutes };