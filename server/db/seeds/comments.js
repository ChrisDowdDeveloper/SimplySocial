const comments = require("./comments.json");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE comments RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("comments").insert(comments);
    });
};