import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { Users } from "../infra/typeorm/entities/Users";

interface IUsersRepository {
    // create(data: ICreateUsersDTO) : Promise<void>;
    findUserbyEmail(email: string): Promise<Users>;
    // findById(idUsers: string): Promise<Users>;
    // listAllUsers(): Promise<Users[]>
    listAllUsersActives() : Promise<Users[]>
}

export { IUsersRepository };