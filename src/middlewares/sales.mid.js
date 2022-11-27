const { getAllProducts } = require('../models/products.model');

const validateProductId = async (req, res, next) => {
  const product = req.body; 
  const getAll = await getAllProducts();
  const productId = product.every((id) => id.productId);
  const mapIdProducts = getAll.map((idProduct) => idProduct.id);
  const verifyId = product.every((p) => mapIdProducts.includes(p.productId));

  if (!productId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (!verifyId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  next();
};

const validateQuantity = (req, res, next) => {
  const product = req.body;
  const quantity = product.every(
     (quant) => quant.quantity !== null && quant.quantity !== undefined,
   );
  const result = product.every((quant) => quant.quantity > 0);
  
  if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (!result) {
    return res.status(422).json({
    message: '"quantity" must be greater than or equal to 1',
  }); 
}

  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
};