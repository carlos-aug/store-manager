const productsService = require('../services/products.service');

const getProducts = async (_req, res) => { 
  const { type, message } = await productsService.getAllProducts();

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const getProductsID = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await productsService.getProductsID(id);

  if (!message) return res.status(404).json({ message: 'Product not found' });
  
  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const insertProduct = async (req, res) => { 
  const { name } = req.body;
  const { type, message } = await productsService.insertProduct(name);

  if (type) return res.status(type).json(message);

  return res.status(201).json(message);
}; 

const deleteProduct = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);

  if (!message) return res.status(404).json({ message: 'Product not found' });

  if (type) return res.status(type).json(message);

  return res.status(204).json(message);
};

module.exports = {
  getProducts,
  getProductsID,
  insertProduct,
  deleteProduct,
};