import { User } from "../../../domain/models/user/user";
import { UserUseCase } from "../../../domain/ports/user/user_usecase";
import { UserService } from "../../ports/user/user_service";

export class UserCrudService implements UserService {
  private readonly service: UserUseCase;

  constructor(userUseCase: UserUseCase) {
    this.service = userUseCase;
  }

  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  async findById(id: string): Promise<User> {
    return await this.service.findById(id);
  }
}