const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  products: [{
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    stock: mongoose.Schema.Types.Mixed,
    images: { type: [String], required: true },
    thumbnail: { type: String, required: true },
    discountPercentage: Number,
    rating: Number,
    tags: [String],
    brand: String,
    weight: Number,
    dimensions: {
      width: Number,
      height: Number,
      depth: Number,
    },
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: String,
    reviews: [
      {
        rating: Number,
        comment: String,
        date: Date,
        reviewerName: String,
        reviewerEmail: String,
      },
    ],
    returnPolicy: String,
    minimumOrderQuantity: Number,
    meta: {
      createdAt: Date,
      updatedAt: Date,
      barcode: String,
      qrCode: String,
    },
  }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;