import {MovieRepository} from '../../adapters/repositories/movie/move_repository';
import {Movie} from '../../models/movie/movie';
import {MovieUseCase} from '../../ports/movie/movie_usecase';

export class MovieCrudUseCase implements MovieUseCase {
  private readonly repository: MovieRepository;

  constructor(movieRepository: MovieRepository) {
    this.repository = movieRepository;
  }

  async findAll(): Promise<Movie[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Movie> {
    return await this.repository.findById(id);
  }
}
