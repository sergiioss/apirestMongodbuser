'use strict'

const mongoose = require('mongoose');

const app = require('./app')
const port = process.env.PORT || 3000.
const config = require('./config')

mongoose.connect(config.db, (error, res) => {
    if (error) {
        return console.log(`Error al conectara a la base de datos: ${error}`);
    } else {
        console.log('Conexion a la base de datos establecida..');
    }
    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`);
    });
})

