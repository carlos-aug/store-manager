const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();

  return { type: null, message: allProducts };
};

const getProductsID = async (id) => {
  const productID = await productsModel.getProductsID(id);

  return { type: null, message: productID };
};

const insertProduct = async (name) => {
  const newProduct = await productsModel.insertProduct(name);

  return { type: null, message: newProduct };
};

const deleteProduct = async (product) => { 
  const productID = await productsModel.getProductsID(product);
  if (!productID) return { type: 404, message: 'Product not found' };
  await productsModel.deleteProduct(product);

  return { type: null };
};

module.exports = {
  getAllProducts,
  getProductsID,
  insertProduct,
  deleteProduct,
};
