const Book = require("../../model/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const book = await Book.find();
    if (book.length === 0) {
      throw new Error("Error occurred while fetching books.");
    }
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const createNewBook = async (req, res) => {
  req.body.image = req.file
    ? req.file.path
    : "https://birkhauser.com/product-not-found.png";
  const book = await Book.create(req.body);
  return res.status(201).json(book);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const foundById = await Book.findById({ _id: id });
  res.status(200).json(foundById);
};

const updateBook = async (req, res) => {
  const { bookId } = req.params;
  const accountToUpdate = await Book.findByIdAndUpdate(bookId, req.body, {
    new: true,
  });

  if (!accountToUpdate) {
    return res.status(404).json({ message: "Account not found" });
  }

  return res.status(200).json({
    message: "Account updated successfully",
    Updated_Account: accountToUpdate,
  });
};

const deleteBook = async (req, res) => {
  const { bookId } = req.params;
  const bookToDelete = await Book.findById({ _id: bookId });
  if (!bookToDelete) {
    return res.status(404).json({ message: "Account not found" });
  }
  await Book.deleteOne({ _id: bookId });

  return res.status(200).json({ message: "Account deleted successfully" });
};

module.exports = {
  getAllBooks,
  createNewBook,
  getBookById,
  updateBook,
  deleteBook,
};
