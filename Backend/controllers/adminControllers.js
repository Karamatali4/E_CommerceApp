const Product = require("../models/productModel");
const User = require("../models/userModel");

// Get Single User
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
    console.log("Get single user....");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
const getAllUserData = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
    console.log("Get all user....");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Delete user (by ID) 
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
    console.log(deletedUser.name," has Deleted in database");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update user (by ID) 
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select("-password");
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
    console.log(updatedUser.name," has Updated in database");

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Delete single product 
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
    console.log(deletedProduct.name," has deleted in database");

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All products
const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
    console.log("Get all product data....");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSingleUser, getAllUserData, deleteUser, updateUser, getAllProduct,deleteProduct };
