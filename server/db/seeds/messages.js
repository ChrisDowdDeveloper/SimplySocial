const messages = require("./messages.json");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE messages RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("messages").insert(messages);
    });
};
