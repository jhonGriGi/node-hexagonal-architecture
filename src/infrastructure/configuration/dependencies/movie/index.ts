import {MovieCrudService} from '../../../../application/services/movie/movie_crud_service';
import {MovieCrudUseCase} from '../../../../domain/use_cases/movie/movie_crud_usecase';
import {InMemoryMovieRepository} from '../../../driven/repositories/movie/in_memory_movie_repository';
import {MovieController} from '../../../driving/controllers/movie/movie_controller';

const inMemoryMovieRepository = new InMemoryMovieRepository();
const movieUseCase = new MovieCrudUseCase(inMemoryMovieRepository);
const movieService = new MovieCrudService(movieUseCase);

export const movieController = MovieController(movieService);
