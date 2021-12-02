import { PostgresRepository } from '../../repositories/implementation/PostgresRepository';
import { CreateNameController } from './CreateNameController';
import { CreateNameUseCase } from './CreateNameUseCase';

const postgresRepository = new PostgresRepository();
const createNameUseCase = new CreateNameUseCase(postgresRepository);
const createNameController = new CreateNameController(createNameUseCase);

export { createNameController };
