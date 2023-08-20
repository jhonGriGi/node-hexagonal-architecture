import {UserCrudService} from '../../../../application/services/user/user_crud_service';
import {UserCrudUseCase} from '../../../../domain/use_cases/user/user_crud_usecase';
import {InMemoryUserRepository} from '../../../driven/repositories/user/in_memory_user_repository';
import {UserController} from '../../../driving/controllers/user/user_controller';

const inMemoryUserRepository = new InMemoryUserRepository();
const userCrudUseCase = new UserCrudUseCase(inMemoryUserRepository);
const userCrudService = new UserCrudService(userCrudUseCase);

export const userController = UserController(userCrudService);
