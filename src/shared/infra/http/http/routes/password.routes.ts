import { Router } from "express";

import { ResetPasswordUserController } from "@modules/persons/useCases/ResetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/persons/useCases/SendForgotPasswordMail/SendForgotPasswordMailController";


const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes };
