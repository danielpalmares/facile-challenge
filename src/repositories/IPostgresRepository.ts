import { EntityName } from '../entities/EntityName';

export interface IPostgresRepository {
  create(name: string): Promise<number>;
  findById(id: number): Promise<EntityName>;
}
