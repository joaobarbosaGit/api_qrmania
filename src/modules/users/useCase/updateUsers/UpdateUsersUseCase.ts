import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IUsersDTO } from "@modules/users/dtos/IUsersDTO";

@injectable()
class UpdateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    name,
    email,
    password,
    cpf_cnpj,
    telefone,
    uf,
    cidade,
    avatar,
    endereco,
    endereco_numero,
    endereco_bairro,
    endereco_cep,
    data_nascimento,
  }: IUsersDTO): Promise<void> {
    await this.usersRepository.updateUser({
      id,
      name,
      email,
      password,
      cpf_cnpj,
      telefone,
      uf,
      cidade,
      avatar,
      endereco,
      endereco_numero,
      endereco_bairro,
      endereco_cep,
      data_nascimento,
    });
  }
}

export { UpdateUsersUseCase };
