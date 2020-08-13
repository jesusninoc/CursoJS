var express = require('express');
var router = express.Router();
const multipart = require('connect-multiparty');
var multiportMiddle = multipart({ uploadDir: './uploads' });
const controllerAlumno = require('../controllers/controller_alumno.js');
//var cliente = require('mongodb').MongoClient;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

router.get('/get', (req, res) => {
    //console.log('Petición realida con exito');
    mongoose.connect('mongodb://127.0.0.1/centro').then(() => {
        res.status(200).send({ message: 'conexion realizada correctamente por get' });
        //console.log(res.status);
        console.log('conexión realizad con exito');
    }).catch(() => {
        console.log('producido error desconocido');
    });
    mongoose.disconnect();
});


router.post('/post', (req, res) => {
    //console.log('Petición realida con exito');
    mongoose.connect('mongodb://127.0.0.1/centro').then(() => {
        res.status(200).send({ message: 'conexion realizada correctamente por post' });
        //console.log(res.status);
        //console.log('conexión realizad con exito');

    }).catch(() => {
        console.log('producido error desconocido');
    });
    mongoose.disconnect();
});

router.get('/controlador', controllerAlumno.prueba);
router.post('/insertar', controllerAlumno.insertar);
router.get('/listar', controllerAlumno.listar);
router.get('/listarTodos', controllerAlumno.listarTodos);
router.put('/modificar/:id', controllerAlumno.modificar);
router.delete('/eliminar/:id', controllerAlumno.eliminar);
router.post('/subir/:id', multiportMiddle, controllerAlumno.subirFichero);

module.exports = router;