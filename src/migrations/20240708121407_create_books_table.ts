import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('books', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.date('published_date').notNullable();
    table.integer('author_id').unsigned().references('id').inTable('authors').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('books');
}
