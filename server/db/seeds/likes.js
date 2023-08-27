const likes = require("./likes.json");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE likes RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("likes").insert(likes);
    });
};