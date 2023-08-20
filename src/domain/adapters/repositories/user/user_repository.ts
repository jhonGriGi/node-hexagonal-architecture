import {User} from '../../../models/user/user';

export interface UserRepository {
  findAll(): Promise<Array<User>>;
  findById(id: string): Promise<User>;
}
