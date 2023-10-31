const { Product } = require('../models/productModel');

const createProduct = async (product) => {
    const createdProduct = new Product(product);
    const savedProduct = createdProduct.save()
    return savedProduct.toObject();
}

const findProductById = async (productId) => {
    const product = await Product.findById(productId).lean();
    return product;
}

const findAllProduct = async () => {
    const products = await Product.find().lean();
    return products;
}

module.exports = {
    createProduct,
    findProductById,
    findAllProduct
};