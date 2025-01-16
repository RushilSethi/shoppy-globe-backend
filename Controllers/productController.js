const Product = require("../Models/productModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findOne({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductDetails = async (req, res) => {
  try {
    const productsData = await Product.findOne({});
    const product = productsData.products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
