import {Movie} from '../../../domain/models/movie/movie';
import {MovieUseCase} from '../../../domain/ports/movie/movie_usecase';
import {MovieService} from '../../ports/movie/movie_service';

export class MovieCrudService implements MovieService {
  private readonly service: MovieUseCase;

  constructor(movieUseCase: MovieUseCase) {
    this.service = movieUseCase;
  }

  async findAll(): Promise<Movie[]> {
    return await this.service.findAll();
  }

  async findById(id: string): Promise<Movie> {
    return await this.service.findById(id);
  }
}
