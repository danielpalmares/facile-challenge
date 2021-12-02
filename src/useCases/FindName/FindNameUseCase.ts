import { IPostgresRepository } from '../../repositories/IPostgresRepository';
import { encryption } from '../../utils/Encryption';

export class FindNameUseCase {
  constructor(private postgresRepository: IPostgresRepository) {}

  async execute(id: number) {
    if (isNaN(id) || !id)
      throw {
        code: 422,
        message: 'O campo id está errado ou não foi especificado!',
      };

    const encryptedName = await this.postgresRepository.findById(id);
    const decryptedName = encryption.decrypt(encryptedName.encrypted_name);

    console.log(decryptedName);
    encryptedName.setEncryptedName = decryptedName;

    return encryptedName;
  }
}
