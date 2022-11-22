const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
  Image: { type: String, require: true },
  Brand_Name: { type: String, require: true },
  Price: { type: String, require: true },
  color: { type: String, require: true },
});

const MEN = mongoose.model("men", menSchema);

module.exports = MEN;
