import { PostgresRepository } from '../../repositories/implementation/PostgresRepository';
import { FindNameController } from './FindNameController';
import { FindNameUseCase } from './FindNameUseCase';

const postgresRepository = new PostgresRepository();
const findNameUseCase = new FindNameUseCase(postgresRepository);
const findNameController = new FindNameController(findNameUseCase);

export { findNameController };
