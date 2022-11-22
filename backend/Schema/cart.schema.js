const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productName: { type: String, required: true },
  Image: { type: String, required: true },
  price: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  quantity: { type: Number, required: true },
  UserId: { type: String, required: true },
});

const CART = mongoose.model("cart", cartSchema);

module.exports = CART;
