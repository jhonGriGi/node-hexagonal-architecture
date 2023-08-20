import {UserRepository} from '../../adapters/repositories/user/user_repository';
import {User} from '../../models/user/user';
import {UserUseCase} from '../../ports/user/user_usecase';

export class UserCrudUseCase implements UserUseCase {
  private readonly repository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findById(id);
  }
}
