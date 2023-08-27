/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('searches', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('query').notNullable();
      table.integer('results_count');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('searches');
  };
  