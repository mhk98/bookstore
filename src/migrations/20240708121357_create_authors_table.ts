import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('authors', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('bio');
    table.date('birthdate').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('authors');
}
