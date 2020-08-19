var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var player = new Schema({

    nombre: String,
    apellido: String,
    edad: Number,
    posicion: String,
    equipo: String,
    valor: Number
});

module.exports = mongoose.model('player', player);