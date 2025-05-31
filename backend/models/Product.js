const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    image: { type: String },
    category: { type: String },
    rating: { type: Number, default: 0 },
    reviews: [{ userId: String, comment: String, rating: Number }]
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);