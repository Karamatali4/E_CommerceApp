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

module.exports = { getSingleUser, getAllUserData, getAllProduct };
