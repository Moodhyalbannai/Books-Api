const express = require("express");
const multer = require("multer");

const router = express.Router();
const {
  getAllBooks,
  createNewBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("./controllers");

router.get("/books", getAllBooks);

router.post("/books/createBook", createNewBook);

router.get("/books/:id", getBookById);

router.put("/books/:bookId", updateBook);

router.delete("/books/:bookId", deleteBook);

module.exports = router;
