const express = require("express");
const corsMiddleware = require("./middleware/cors");
const booksRouter = require("./api/books/routes");
const connectDB = require("./database");
const {
  notFoundMiddleware,
  errorHandlerMiddleware,
} = require("./middleware/NotFound");
const morgan = require("morgan");

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.use("/api", booksRouter);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

app.listen((port = 8080), () => {
  console.log(`Server is running on port ${port}`);
});
