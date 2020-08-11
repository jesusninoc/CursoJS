'use strict'
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuario = new Schema ({nombre: String, edad: Number, experiencia: Boolean, curso: Number});

module.exports = mongoose.model('usuario',usuario);
