import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.hasTable('crypto').then(async exists => {
    if (exists) return;

    await knex.schema.createTable('crypto', table => {
      table.increments('id', { primaryKey: true });
      table.text('encrypted_name').notNullable();
    });
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.hasTable('crypto').then(async exists => {
    if (!exists) return;

    await knex.schema.dropTable('crypto');
  });
}
