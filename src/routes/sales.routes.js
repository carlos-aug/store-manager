const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateProductId, validateQuantity } = require('../middlewares/sales.mid');

const salesRouter = express.Router();

salesRouter.post('/', validateProductId, validateQuantity, salesController.insertSale);

// salesRouter.get('/:id', salesController.getProductsID);

module.exports = salesRouter;