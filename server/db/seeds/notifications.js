const notifications = require("./notifications.json");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE notifications RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("notifications").insert(notifications);
    });
};