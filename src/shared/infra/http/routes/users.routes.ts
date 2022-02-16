import { Router } from "express";

import { ListAllUsersController } from "@modules/users/useCase/listUsers/ListUsersController";
import { FindEmailController } from "@modules/users/useCase/findEmail/FindEmailController";


const usersRoutes = Router();

const listAllUsersActiveController = new ListAllUsersController();
const findEmailController = new FindEmailController();

usersRoutes.get("/listusersactive", listAllUsersActiveController.handle);
usersRoutes.post("/findemail", findEmailController.handle);


export { usersRoutes };