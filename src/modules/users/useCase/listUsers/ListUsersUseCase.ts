import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { Users } from "@modules/users/infra/typeorm/entities/Users";

@injectable()
class ListAllUsersUseCase{

    constructor(

    @inject("UsersRepository")
    private usersRepository: IUsersRepository){};

    async execute() : Promise< Users[]> {

       const users = await this.usersRepository.listAllUsersActives();

       return users;
    }
}

export { ListAllUsersUseCase };