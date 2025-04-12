
const  express = require("express");
const { userRegistration } = require("../controllers/authController");

const authRoutes = express.Router();


// Registeration new user
authRoutes.post("/register",userRegistration);

module.exports = authRoutes ;