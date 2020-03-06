const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

import {
  createProduct,
  getProduct,
  getByCategory
} from "./controllers/productController";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// HTTPS Request
app.post("/api/product", (req, res) => createProduct(req, res));
app.get("/api/:name", (req, res) => getProduct(req, res));
app.get("/api/products/:category", (req, res) => getByCategory(req, res));

export default app;
