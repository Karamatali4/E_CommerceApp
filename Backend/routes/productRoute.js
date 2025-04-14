import express from "express";
import { verifyAdmin } from "../middleware/authMiddleware";

const ProductRouter = express.Router();

ProductRouter.post("/", verifyAdmin,productAdd);

module.exports = ProductRouter;
