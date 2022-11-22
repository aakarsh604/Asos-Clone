const mongoose = require("mongoose");

const womenSchema = mongoose.Schema({
  Image: { type: String, require: true },
  Brand_Name: { type: String, require: true },
  Price: { type: String, require: true },
  color: { type: String, require: true },
});

const WOMEN = mongoose.model("women",womenSchema);

module.exports = WOMEN;
