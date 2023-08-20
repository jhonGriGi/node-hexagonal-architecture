import {User} from '../../models/user/user';

export interface UserUseCase {
  findAll(): Promise<Array<User>>;
  findById(id: string): Promise<User>;
}
