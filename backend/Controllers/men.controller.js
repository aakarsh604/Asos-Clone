const express = require("express");
const MEN = require("../Schema/men.schema");

const menController = express.Router();

menController.get("/", async (req, res) => {
    const { sortFilter } = req.query;
    let data;
    if (sortFilter) {
      if (sortFilter == "asc") {
        data = await MEN.find()
          .sort({ Price: 1 })
          .collation({ locale: "en_US", numericOrdering: true });
      } else if (sortFilter == "desc") {
        data = await MEN.find()
          .sort({ Price: -1 })
          .collation({ locale: "en_US", numericOrdering: true });
      } else {
        data = await MEN.find({ color: sortFilter });
      }
    } else {
      data = await MEN.find();
    }
  
    res.send(data);
});

menController.get("/productdetails/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const data = await MEN.find({ _id: id });
  res.status(200).send(data);
});

menController.post("/insert",  async (req, res) => {
  const { Image, Brand_Name, Price, color } = req.body;

  const data = await MEN.create({
    Image,
    Brand_Name,
    Price,
    color,
  });

  res.status(200).send("Data Added");
});

module.exports = menController;
