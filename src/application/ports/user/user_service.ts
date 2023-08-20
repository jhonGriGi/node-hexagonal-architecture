import {User} from '../../../domain/models/user/user';

export interface UserService {
  findAll(): Promise<Array<User>>;
  findById(id: string): Promise<User>;
}
