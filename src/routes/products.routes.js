const express = require('express');
const productsController = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/:id', productsController.getProductsID);

productsRouter.post('/', productsController.insertProduct);

module.exports = productsRouter;