const {
  createProduct,
  findProductById,
  findAllProduct
} = require('../repositories/productRepo');




const createAProduct = async (product) => {
  const createdProduct = await createProduct(product);
  return createdProduct;
}

const getProductById = async (productId) => {
  const product = await findProductById(productId);
  return product;
}

const getProducts = async () => {
  const products = await findAllProduct();
  return products;
}

module.exports = {
  createAProduct,
  getProductById,
  getProducts
};