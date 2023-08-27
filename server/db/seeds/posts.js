const posts = require("./posts.json");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE posts RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("posts").insert(posts);
    });
};