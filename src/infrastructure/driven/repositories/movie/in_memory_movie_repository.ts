import {MovieRepository} from '../../../../domain/adapters/repositories/movie/move_repository';
import {Movie} from '../../../../domain/models/movie/movie';

export class InMemoryMovieRepository implements MovieRepository {
  private readonly data: Array<Movie> = [
    {
      id: '123',
      name: 'It(eso)',
      authorEmail: 'warner@gmail.com',
    },
    {
      id: '456',
      name: 'El conjuro',
      authorEmail: 'newlinecinema@gmail.com',
    },
  ];

  async findAll(): Promise<Movie[]> {
    return await Promise.resolve(this.data);
  }

  async findById(id: string): Promise<Movie> {
    const movie = this.data.filter(value => value.id === id);

    return await Promise.resolve(movie[0]);
  }
}
