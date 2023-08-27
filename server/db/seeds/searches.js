const searches = require("./searches.json");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE searches RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("searches").insert(searches);
    });
};
