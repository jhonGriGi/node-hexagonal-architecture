import {Movie} from '../../models/movie/movie';

export interface MovieUseCase {
  findAll(): Promise<Array<Movie>>;
  findById(id: string): Promise<Movie>;
}
