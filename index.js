'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/api/product', (req, res) =>{
    res.send({products:[]})
    res.status(200).send({message : 'El producto se ha recibido'});
});

app.get('/api/product/:productId', (req, res) => {

});

app.post('/api/product', (req, res) => {
    console.log(req.body);
    res.send(200, {mensaje: 'El producto se ha recibido'});

});

app.put('/api/product/:productId', (req, res) => {

});

app.delete('/api/product/:productId', (req, res) => {
    
});


mongoose.connect('mongodb://localhost:27017/shop', (error, res) => {
    if(error){
       return console.log(`Error al conectara a la base de datos: ${error}`);
    }else{
       console.log('Conexion a la base de datos establecida..');
    }

    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`);
    });
});

