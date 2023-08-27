/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('settings', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('setting_name');
      table.string('setting_value');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('settings');
  };
  