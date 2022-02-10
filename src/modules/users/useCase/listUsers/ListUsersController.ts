import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllUsersUseCase } from "./ListUsersUseCase";

class ListAllUsersController {

    async handle(request: Request, response: Response): Promise<Response>{
         
        const findAllUsersUseCase = container.resolve(ListAllUsersUseCase);

        const Users = await findAllUsersUseCase.execute();

        return response.status(200).json(Users).send();
    }

}

export { ListAllUsersController };