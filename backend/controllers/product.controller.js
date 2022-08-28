const Product = require("../models/product.model");

// Get all products controller
const getAllProducts = async (req, res) => {
  try {
    // const sortBy = req.query || null;
    const brand = req.query.en_brand_content || null;
    console.log(brand);
    const products = await Product.find({});
    // if (sortBy === "priceAscending") {
    //   products = await Product.aggregate([{ $sort: { price: 1 } }]);
    // } else if (sortBy === "priceDescending") {
    //   products = await Product.aggregate([{ $sort: { price: -1 } }]);
    // } else if (sortBy === "title") {
    //   products = await Product.aggregate([{ $sort: { title: 1 } }]);
    // }
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const productDetails = await Product.findById(id);
    res.json(productDetails);
  } catch (error) {
    res.stateu(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts, getProductById };
