export class EntityName {
  public readonly id: number;
  public encrypted_name: string;

  constructor(id: number, encrypted_name: string) {
    this.id = id;
    this.encrypted_name = encrypted_name;
  }

  public set setEncryptedName(value: string) {
    this.encrypted_name = value;
  }
}
