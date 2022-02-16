import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { Users } from "@modules/users/infra/typeorm/entities/Users";
import { ILojista_DadosRepository } from "@modules/lojista/repositories/ILojista_DadosRepository";

@injectable()
class ListAllUsersUseCase{

    constructor(

    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    //@inject("Lojista_DadosRepository")
    //private lojista_dadosRepository: ILojista_DadosRepository
    ){};

    async execute() : Promise< Users[]> {

       const users = await this.usersRepository.listAllUsersActives();

       //const lojista = await this.lojista_dadosRepository.findLojista_DadosByUsers_Id(users.id);

       return users;
    }
}

export { ListAllUsersUseCase };