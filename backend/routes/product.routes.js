const express = require("express");
const { getAllProducts } = require("../controllers/product.controller");

const router = express.Router();

// Get all products route
router.get("/", getAllProducts);

module.exports = router;
