const express = require("express");
const { createUser } = require("../controller/userController");
const routes = express.Router();
createUser

routes.post("/register",createUser);

module.exports = routes;