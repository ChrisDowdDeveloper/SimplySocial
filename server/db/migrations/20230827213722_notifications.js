/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('notifications', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.text('content');
      table.string('type');
      table.boolean('is_read').defaultTo(false);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('notifications');
  };
  