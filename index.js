'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3000
const ProductCtr = require('./controllers/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/product', ProductCtr.getProducts);
app.get('/api/product/:productId', ProductCtr.getProduct);
app.post('/api/product', ProductCtr.createProduct);
app.put('/api/product/:productId', ProductCtr.updateProduct);
app.delete('/api/product/:productId', ProductCtr.deleteProduct);


mongoose.connect('mongodb://localhost:27017/shop', (error, res) => {
    if (error) {
        return console.log(`Error al conectara a la base de datos: ${error}`);
    } else {
        console.log('Conexion a la base de datos establecida..');
    }

    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`);
    });
});

