const users = require("./users.json");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("users").insert(users);
    });
};
