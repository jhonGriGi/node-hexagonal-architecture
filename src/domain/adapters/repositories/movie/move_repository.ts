import {Movie} from '../../../models/movie/movie';

export interface MovieRepository {
  findAll(): Promise<Array<Movie>>;
  findById(id: string): Promise<Movie>;
}
