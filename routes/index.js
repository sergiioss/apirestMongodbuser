'use strict'

const express = require('express');
const api = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/user');
const productCtr = require('../controllers/product');

api.get('/product', productCtr.getProducts);
api.get('/product/:productId', productCtr.getProduct);
api.post('/product', productCtr.createProduct);
api.put('/product/:productId', productCtr.updateProduct);
api.delete('/product/:productId', productCtr.deleteProduct);
api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' });
});

module.exports = api;
