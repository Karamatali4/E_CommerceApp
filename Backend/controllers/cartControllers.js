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

module.exports = addToCart;
