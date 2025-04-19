// const express = require("express");
// const { verifyToken } = require("../middleware/authMiddleware.js");
// const  addToCart  = require("../controllers/cartControllers.js");

// const cartRoutes = express.Router();

// // Add to Cart
// cartRoutes.post("/add",addToCart);

// module.exports =  cartRoutes;




const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware.js");
const {addToCart, deleteCart, removeFromCart} = require("../controllers/cartControllers.js"); 

const cartRoutes = express.Router();

// for add cart route
cartRoutes.post("/add", addToCart);

// for delete cart route
cartRoutes.delete("/delete", verifyToken, deleteCart);

// for delete one product
cartRoutes.delete("/remove/:productId", verifyToken, removeFromCart);

module.exports = cartRoutes;
