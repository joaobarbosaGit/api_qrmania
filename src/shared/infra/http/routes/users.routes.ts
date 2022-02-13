import { Router } from "express";

import { ListAllUsersController } from "@modules/users/useCase/listUsers/ListUsersController";
import { FindEmailController } from "@modules/users/useCase/findEmail/FindEmailController";


const usersRoutes = Router();

const listAllUsersActiveController = new ListAllUsersController();
const findEmailController = new FindEmailController();

//usersRoutes.get("/listUsersActive", listAllUsersActiveController.handle);
usersRoutes.get("/findemail", findEmailController.handle);


export { usersRoutes };