const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  coverImage: String, // String is shorthand for {type: String}
  name: { type: String, required: true, max: [60, "最大60文字までです"] },
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtext1: String,
  headingtext2: String,
  headingtext3: String,
});

module.exports = mongoose.model("Product", ProductSchema);
