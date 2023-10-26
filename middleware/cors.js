const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8080",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const corsMiddleware = cors(corsOptions); //instance

module.exports = corsMiddleware;
