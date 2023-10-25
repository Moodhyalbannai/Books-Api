const { Schema, model } = require("mongoose");

const BooksSchema = Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: {
    type: String,
    defaul: "https://birkhauser.com/product-not-found.png",
  },
});

module.exports = model("Book", BooksSchema);
