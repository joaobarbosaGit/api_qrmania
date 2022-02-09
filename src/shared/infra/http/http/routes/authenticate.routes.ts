import { Router } from "express";

import { AuthenticatePersonsController } from "@modules/persons/useCases/AuthenticateUser/AuthenticatePersonsController";
import { RefreshTokenController } from "@modules/persons/useCases/RefreshToken/RefreshTokenController";



const authenticateRoutes = Router();

const authenticatePersonsController = new AuthenticatePersonsController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticatePersonsController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };