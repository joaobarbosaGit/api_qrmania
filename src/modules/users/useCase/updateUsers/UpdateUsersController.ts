import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUsersUseCase } from "./UpdateUsersUseCase";

class UpdateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const updateUsersUseCase = container.resolve(UpdateUsersUseCase);

    const Users = await updateUsersUseCase.execute({
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

    return response.status(204).json(Users).send();
  }
}

export { UpdateUsersController };
