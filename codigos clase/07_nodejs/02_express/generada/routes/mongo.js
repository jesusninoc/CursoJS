var express = require('express');
var router = express.Router();
var cliente = require('mongodb').MongoClient;
const modelo = require('../modelo');

/* GET ../users listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    res.render('mongo');
});

router.get('/busqueda', function (req, res, next) {
    res.send('respond with a resource');
    var nombre = req.query.nombre;
    cliente.connect("mongodb://127.0.0.1/", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (error, client) => {
        console.log(nombre);
        if (error) {
            console.log('error a la hora de conectar a la base de datos');
            process.exit();
        }
        var db = client.db('inicial');
        db.collection('usuarios').findOne({ nombre: 'Borja' }, function (findErr, result) {
            if (findErr) throw findErr;
            console.log(result);
            client.close();
        });
    })
});


router.post('/insertar', function (req, res, next) {

    /*cliente.connect("mongodb://127.0.0.1/", { useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
        //console.log(nombre);
        if (error) {
            console.log('error a la hora de conectar');
            process.exit();
        }
        var db = client.db('inicial');
        var objeto = { nombre: 'Rebeca', edad: 23, experiencia: false, curso: 2 }
        db.collection('usuarios').insertOne(objeto, function (findErr, result) {
            if (findErr) {
                console.log(findErr);
                throw findErr
            };
            console.log(result);
            client.close();
        });
    })*/

    console.log('Post realizado');
});

module.exports = router;