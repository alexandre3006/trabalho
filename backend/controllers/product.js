const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const saved = await newProduct.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const { category, search } = req.query;
        let query = {};
        if (category) query.category = category;
        if (search) query.title = { $regex: search, $options: "i" };
        const products = await Product.find(query);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
};