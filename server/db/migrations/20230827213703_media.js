/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('media', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('url');
      table.string('type');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('media');
  };
  