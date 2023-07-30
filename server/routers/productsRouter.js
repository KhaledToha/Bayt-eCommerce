const express = require('express');
const { getProductsController } = require('../controllers');

const productRouter = express.Router();

productRouter.get('/products', getProductsController);

module.exports = productRouter;
