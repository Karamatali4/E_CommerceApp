
const  express = require("express");
const { userRegistration, userLogin } = require("../controllers/authController");

const authRoutes = express.Router();


// Registeration new user
authRoutes.post("/register",userRegistration);


// user Login
authRoutes.post("/login",userLogin);
module.exports = authRoutes ;