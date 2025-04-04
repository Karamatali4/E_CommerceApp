import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { addToCart } from "../controllers/cartControllers.js";

const cartRoutes = express.Router();

// Add to Cart
cartRoutes.post("/add",verifyToken,addToCart);

export default cartRoutes;
