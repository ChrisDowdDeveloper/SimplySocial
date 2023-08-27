const media = require("./media.json");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE media RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("media").insert(media);
    });
};
