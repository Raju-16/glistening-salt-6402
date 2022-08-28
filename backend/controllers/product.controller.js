const Product = require("../models/product.model");

// Get all products controller
const getAllProducts = async (req, res) => {
  try {
    console.log(req.params);
    const products = await Product.find({ brand: "ghd" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts };
