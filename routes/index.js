'use strict'

const express = require('express');
const api = express.Router();
const ProductCtr = require('../controllers/product');

api.get('/product', ProductCtr.getProducts);
api.get('/product/:productId', ProductCtr.getProduct);
api.post('/product', ProductCtr.createProduct);
api.put('/product/:productId', ProductCtr.updateProduct);
api.delete('/product/:productId', ProductCtr.deleteProduct);

module.exports = api;
