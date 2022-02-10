import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { Users } from "@modules/users/infra/typeorm/entities/Users";

@injectable()
class ListAllUsersUseCase{

    constructor(

    @inject("UsersRepository")
    private UsersRepository: IUsersRepository){};

    async execute() : Promise< Users[]> {

       const Users = await this.UsersRepository.listAllUsersActives();

       return Users;
    }
}

export { ListAllUsersUseCase };