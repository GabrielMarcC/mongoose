import mongoose from "mongoose";

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Ana",
  },
  age: {
    type: Number,
    default: 28,
  },
  favoriteFoods: {
    type: [String],
    default: ["Hamburguer", "Apple", "pineapple", "mango"],
  },
});

module.exports = mongoose.model("Person", personSchema);
