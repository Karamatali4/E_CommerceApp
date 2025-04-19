const Cart = require('../models/cartModel');

// Add to Cart
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  // const userId = req.user.id; // Use token info instead of body


  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [{ productId, quantity }] }); // ✅ Capital C
    } else {
      const productIndex = cart.products.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    }

    await cart.save();
    console.log("add to cart product...");
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// delete all cart


const deleteCart = async (req, res) => {
  try {
    const userId = req.user.id; // Use from token
    await Cart.findOneAndDelete({ userId });
    console.log("all Cart deleted..... ");
    res.status(200).json({ message: "Cart deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Delete one product
const removeFromCart = async (req, res) => {
  const userId = req.user.id; // Get from JWT token
  const productId = req.params.productId;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const updatedProducts = cart.products.filter(
      (item) => item.productId.toString() !== productId
    );

    cart.products = updatedProducts;
    await cart.save();
    console.log("remove single product..")
    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {addToCart,deleteCart,removeFromCart};
