import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IFindEmailUsersDTO } from "@modules/users/dtos/IFindEmailDTO";
import { AppError } from "@shared/erros/AppError";
import { Users } from "@modules/users/infra/typeorm/entities/Users";


@injectable()
class FindEmailUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({email}: IFindEmailUsersDTO): Promise<Users> {

    const user = await this.usersRepository.findUserbyEmail(email);

    if (!user) {
        throw new AppError("Email Does not Exist");
    }

    return user;
  }
}

export { FindEmailUserUseCase };
