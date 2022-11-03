'use strict'

const mongoose = require('mongoose');

const app = require('./app')
const port = process.env.PORT || 3000.
const config = require('./config')

require('dotenv').config('MONGODB_URL');

mongoose.connect(process.env.MONGODB_URL, (error, res) => {
    if (error) {
        return console.log(`Error al conectara a la base de datos: ${error}`);
    } else {
        console.log('Conexion a la base de datos establecida..');
    }
    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`);
    });
})

