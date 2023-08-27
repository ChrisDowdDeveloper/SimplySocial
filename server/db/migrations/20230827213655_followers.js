/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('followers', function(table) {
      table.increments('id').primary();
      table.integer('follower_id').unsigned().references('id').inTable('users');
      table.integer('following_id').unsigned().references('id').inTable('users');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('followers');
  };
  