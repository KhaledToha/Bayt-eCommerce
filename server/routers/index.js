const express = require('express');
const productRouter = require('./productsRouter');

const Router = express.Router();

Router.use(productRouter);

module.exports = Router;
