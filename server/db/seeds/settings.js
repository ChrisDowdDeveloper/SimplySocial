const settings = require("./settings.json");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE settings RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("settings").insert(settings);
    });
};