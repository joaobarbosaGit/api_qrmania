import { Users } from "../infra/typeorm/entities/Users";

interface IUsersRepository {
  findUserbyEmail(email: string): Promise<Users>;
  listAllUsersActives(): Promise<Users[]>;
}

export { IUsersRepository };
