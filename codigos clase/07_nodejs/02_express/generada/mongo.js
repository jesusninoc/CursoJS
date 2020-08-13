var conexion;
//const modelo = require('../modelo');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

conexion = {
    conectar: () => {
        mongoose.connect('mongodb://127.0.0.1/centro').then(() => {
            console.log('conexion realizada con existo');
        }).catch((err) => {
            console.log(`Error ${err}`);
        });
    },
    desconectar: () => {
        mongoose.disconnect();
    }
}

module.exports = conexion;