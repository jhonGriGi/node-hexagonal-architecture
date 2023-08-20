import {UserRepository} from '../../../../domain/adapters/repositories/user/user_repository';
import {User} from '../../../../domain/models/user/user';

export class InMemoryUserRepository implements UserRepository {
  private readonly data: Array<User> = [
    {
      id: '123',
      name: 'John Doe',
      age: 18,
      email: 'johndoe@gmail.com',
    },
    {
      id: '456',
      name: 'Mary Doe',
      age: 18,
      email: 'marydoe@gmail.com',
    },
  ];

  async findAll(): Promise<User[]> {
    return await Promise.resolve(this.data);
  }

  async findById(id: string): Promise<User> {
    const user = this.data.filter(value => value.id === id);

    return await Promise.resolve(user[0]);
  }
}
