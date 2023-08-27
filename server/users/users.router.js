/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */
const methodNotAllowed = require("../errors/methodNotAllowed");
const router = require("express").Router();
const controller = require("./users.controller");

router
  .route("/login")
  .post(controller.login)
  .all(methodNotAllowed);

router
  .route("/")
  .all(methodNotAllowed);

module.exports = router;