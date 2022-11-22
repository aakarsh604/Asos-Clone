const express = require("express");

const SHOE = require("../Schema/shoe.schema");

const shoeController = express.Router();

shoeController.get("/", async (req, res) => {
  const { sortFilter } = req.query;
  let data;
  if (sortFilter) {
    if (sortFilter == "asc") {
      data = await SHOE.find()
        .sort({ Price: 1 })
        .collation({ locale: "en_US", numericOrdering: true });
    } else if (sortFilter == "desc") {
      data = await SHOE.find()
        .sort({ Price: -1 })
        .collation({ locale: "en_US", numericOrdering: true });
    } else {
      data = await SHOE.find({ color: sortFilter });
    }
  } else {
    data = await SHOE.find();
  }

  res.send(data);
});

shoeController.get("/productdetails/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const data = await SHOE.find({ _id: id });
  res.status(200).send(data);
});

shoeController.post("/insert", async (req, res) => {
  const { Image, Brand_Name, Price, color } = req.body;

  const data = await SHOE.create({
    Image,
    Brand_Name,
    Price,
    color,
  });

  res.status(200).send("Data Added");
});

module.exports = shoeController;
