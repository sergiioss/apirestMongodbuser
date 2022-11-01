'use strict'

const express = require('express');
const api = express.Router();
const auth = require('../middlewares/auth')
const ProductCtr = require('../controllers/product');

api.get('/product', ProductCtr.getProducts);
api.get('/product/:productId', ProductCtr.getProduct);
api.post('/product', ProductCtr.createProduct);
api.put('/product/:productId', ProductCtr.updateProduct);
api.delete('/product/:productId', ProductCtr.deleteProduct);
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' });
});

module.exports = api;
