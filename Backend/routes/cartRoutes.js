const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware.js");
const  addToCart  = require("../controllers/cartControllers.js");

const cartRoutes = express.Router();

// Add to Cart
cartRoutes.post("/add",verifyToken,addToCart);

module.exports =  cartRoutes;
