// const express = require("express");
// const { verifyToken } = require("../middleware/authMiddleware.js");
// const  addToCart  = require("../controllers/cartControllers.js");

// const cartRoutes = express.Router();

// // Add to Cart
// cartRoutes.post("/add",addToCart);

// module.exports =  cartRoutes;




const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware.js");
const addToCart = require("../controllers/cartControllers.js"); // ✅ No destructuring

const cartRoutes = express.Router();

cartRoutes.post("/add", addToCart);

module.exports = cartRoutes;
