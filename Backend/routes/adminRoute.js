const app = require("express");
const adminRoutes = app.Router();
const { verifyAdmin } = require("../middleware/authMiddleware");
const {
  getSingleUser,
  getAllUserData,
  getAllProduct,
  deleteUser,
  updateUser,
  deleteProduct,
  updateProduct,
  deleteAllProduct,
  updatedProduct,
  deleteAllUser,
} = require("../controllers/adminControllers");

// Get All Users
adminRoutes.get("/users", verifyAdmin, getAllUserData);

// Get Single User
adminRoutes.get("/users/:id", verifyAdmin, getSingleUser);

// Delete user (by ID)
adminRoutes.delete("/users/:id", verifyAdmin, deleteUser);

// Update user (by ID)

adminRoutes.put("/users/:id", verifyAdmin, updateUser);

//Delete all User

adminRoutes.delete("/users", verifyAdmin, deleteAllUser);

// Get All products
adminRoutes.get("/products", verifyAdmin, getAllProduct);

// Delete single product

adminRoutes.delete("/products/:id", verifyAdmin, deleteProduct);

// Update single product

adminRoutes.put("/products/:id", verifyAdmin, updateProduct);

// Delete All products
adminRoutes.delete("/products", verifyAdmin, deleteAllProduct);

module.exports = adminRoutes;
