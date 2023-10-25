const express = require("express");
const booksRouter = require("./api/books/routes");
const connectDB = require("./database");

const app = express();
app.use(express.json());

connectDB();
app.use("/api", booksRouter);

app.listen((port = 8080), () => {
  console.log(`Server is running on port ${port}`);
});
