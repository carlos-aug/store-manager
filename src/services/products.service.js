const productsModel = require('../models/products.model');

const getAllProducts = async () => { 
  const allProducts = await productsModel.getAllProducts();

  return { type: null, message: allProducts };
};

const getProductsID = async (id) => { 
  const productID = await productsModel.getProductsID(id);

  return { type: null, message: productID };
};

const insertProduct = async (newProduct) => { 
  await productsModel.insertProduct(newProduct);

  return getAllProducts();
};

module.exports = {
  getAllProducts,
  getProductsID,
  insertProduct,
};