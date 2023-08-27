/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('likes', function(table) {
      table.increments('id').primary();
      table.integer('post_id').unsigned().references('id').inTable('posts');
      table.integer('comment_id').unsigned().references('id').inTable('comments');
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('likes');
  };
  