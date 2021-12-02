interface ICryptoTable {
  id: number;
  encrypted_name: string;
}

declare module 'knex/types/tables' {
  interface Tables {
    crypto: ICryptoTable;
  }
}
