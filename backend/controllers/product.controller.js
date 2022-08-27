const Product = require("../models/product.model");

// Get all products controller
const getAllProducts = async (req, res) => {
  try {
    console.log(req.body);
    const products = await Product.find(req.body);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts };
