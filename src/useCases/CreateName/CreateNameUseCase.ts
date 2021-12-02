import { IPostgresRepository } from '../../repositories/IPostgresRepository';
import { encryption } from '../../utils/Encryption';

export class CreateNameUseCase {
  constructor(private postgresRepository: IPostgresRepository) {}

  async execute(name: string) {
    if (!name.replace(/\s+/g, ' ').trim())
      throw {
        code: 422,
        message: 'O campo nome está errado ou não foi especificado!',
      };

    const encryptedName = encryption.crypt(name);
    const encryptedNameId = await this.postgresRepository.create(encryptedName);

    return encryptedNameId;
  }
}
