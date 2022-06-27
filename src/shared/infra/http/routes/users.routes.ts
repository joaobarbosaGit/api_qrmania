import { Router } from "express";

import { ListAllUsersController } from "@modules/users/useCase/listUsers/ListUsersController";
import { FindEmailController } from "@modules/users/useCase/findEmail/FindEmailController";
import { UpdateUsersController } from "@modules/users/useCase/updateUsers/UpdateUsersController";

const usersRoutes = Router();

const listAllUsersActiveController = new ListAllUsersController();
const findEmailController = new FindEmailController();
const updateUsersControler = new UpdateUsersController();

usersRoutes.get("/listusersactive", listAllUsersActiveController.handle);
usersRoutes.post("/findemail", findEmailController.handle);
usersRoutes.patch("/", updateUsersControler.handle);

export { usersRoutes };
