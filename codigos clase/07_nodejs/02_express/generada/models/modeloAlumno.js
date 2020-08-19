'use strict'
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuario = new Schema({
    nombre: String,
    apellidos: String,
    anios: Number,
    curso: Number,
    experiencia: Boolean
});

module.exports = mongoose.model('alumno', usuario);