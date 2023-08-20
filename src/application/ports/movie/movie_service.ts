import {Movie} from '../../../domain/models/movie/movie';

export interface MovieService {
  findAll(): Promise<Array<Movie>>;
  findById(id: string): Promise<Movie>;
}
