const { Schema, model } = require("mongoose");

const shoesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  is_in_inventory: {
    type: Boolean,
    required: true,
  },
  items_left: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  featured: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

module.exports = model("Shoes", shoesSchema);
