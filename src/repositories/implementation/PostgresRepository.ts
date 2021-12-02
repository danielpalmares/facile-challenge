import { db } from '../../database/connection';
import { EntityName } from '../../entities/EntityName';
import { IPostgresRepository } from '../IPostgresRepository';

export class PostgresRepository implements IPostgresRepository {
  async create(name: string): Promise<number> {
    await db.insert({ encrypted_name: name }).into('crypto');

    const query = await db
      .select('id')
      .from('crypto')
      .where({ encrypted_name: name })
      .first();

    return query['id'];
  }

  async findById(id: number): Promise<EntityName> {
    const query = await db.select('*').from('crypto').where({ id }).first();

    const encryptedName = new EntityName(query.id, query.encrypted_name);

    return encryptedName;
  }
}
