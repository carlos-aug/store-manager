const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares/validateName');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/:id', productsController.getProductsID);

productsRouter.post('/', validateName, productsController.insertProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;