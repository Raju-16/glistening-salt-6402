const express = require("express");
const {
  getAllProducts,
  getProductById,
} = require("../controllers/product.controller");

const router = express.Router();

// Get all products route
router.get("/", getAllProducts);

// Get single product
router.get("/:id", getProductById);

module.exports = router;
