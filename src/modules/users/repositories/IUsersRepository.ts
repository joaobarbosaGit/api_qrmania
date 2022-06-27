import { IUsersDTO } from "../dtos/IUsersDTO";
import { Users } from "../infra/typeorm/entities/Users";

interface IUsersRepository {
  findUserbyEmail(email: string): Promise<Users>;
  listAllUsersActives(): Promise<Users[]>;
  updateUser(dados: IUsersDTO): Promise<void>;
}

export { IUsersRepository };
