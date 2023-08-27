/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table) {
      table.increments('id').primary();
      table.integer('sender_id').unsigned().references('id').inTable('users');
      table.integer('receiver_id').unsigned().references('id').inTable('users');
      table.text('content');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('messages');
  };
  