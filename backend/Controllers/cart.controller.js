const express = require("express");
const CART = require("../Schema/cart.schema");
const cartController = express.Router();

cartController.get("/:id", async (req, res) => {
  const { id } = req.params;

  const items = await CART.find({ id: id });

  res.status(200).send(items);
});

cartController.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const deletedData = await CART.deleteOne({ id: id });

  const data = await CART.find();

  res.status(200).send(data);
});

cartController.patch("/:id/edit", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { size, quantity } = req.body;
  const item = await CART.findOne({ _id: id });
  console.log(item);
  const updated_product = await CART.findOneAndUpdate(
    { _id: id },
    { size: size, quantity: quantity },
    { new: true }
  );
  return res.status(200).send(updated_product);
});

cartController.post("/create", async (req, res) => {
  const { productName, Image, price, size, color, quantity, UserId } = req.body;
  const data = await CART.create({
    productName,
    Image,
    price,
    size,
    color,
    quantity,
    UserId,
  });
  return res.status(200).send({ message: "Item addeed", cart: data });
});

module.exports = cartController;
