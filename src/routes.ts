const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

import { createProduct, getProduct } from "./controllers/productController";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// HTTPS Request
app.post("/api/product", (req, res) => createProduct(req, res));
app.post("/api/:name", (req, res) => getProduct(req, res));

export default app;
