const mongoose = require("mongoose");

const shoeSchema = mongoose.Schema({
  Image: { type: String, require: true },
  Brand_Name: { type: String, require: true },
  Price: { type: String, require: true },
  color: { type: String, require: true },
});

const SHOE = mongoose.model("shoe",shoeSchema);

module.exports = SHOE;
