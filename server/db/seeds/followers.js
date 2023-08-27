const followers = require("./followers.json");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE followers RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("followers").insert(followers);
    });
};
