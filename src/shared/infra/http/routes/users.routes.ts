import { Router } from "express";

import { ListAllUsersController } from "@modules/users/useCase/listUsers/ListUsersController";


const usersRoutes = Router();

const listAllUsersActiveController = new ListAllUsersController();

usersRoutes.get("/listUsersActive", listAllUsersActiveController.handle);


export { usersRoutes };