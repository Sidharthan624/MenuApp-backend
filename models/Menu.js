const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [MenuItemSchema],
});

module.exports = mongoose.model("Menu", MenuSchema);
