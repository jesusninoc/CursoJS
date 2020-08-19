const bdModel = require('../models/playerModel');
var player;
var controlador = {
    base: (req, res) => {
        res.status(200).send(console.log('peticion correcta'));
    },
    add: (req, res) => {
        //res.status(200).send(console.log('peticion correcta'));
        player = new bdModel();
        var parametros = req.body;
        //console.log(parametros);
        player.nombre = parametros.nombre;
        player.apellido = parametros.apellidos;
        player.edad = parametros.edad;
        player.equipo = parametros.equipo;
        player.posicion = parametros.posicion;
        player.valor = parametros.valor;

        player.save((err, result) => {

            if (err) {
                return res.status(500).send({ code: 3, message: 'error en la conexión con la bd' });
            } else if (result.length == 0) {
                return res.status(400).send({ code: 2, message: 'error en la operación, fallo de parámetros' });

            }
            return res.status(200).send({ code: 1, message: 'jugador insertado con exito', player: result })
        });

    },
    remove: (req, res) => {
        var paramId = req.params.id;
        bdModel.findByIdAndDelete(paramId, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 3, message: 'error en el borrado' });
            } else if (!result) {
                return res.status(400).send({ code: 2, message: 'id no encontrado, no se ha podido borrar' });
            }
            return res.status(200).send({ code: 1, message: 'Elemento borrado correctamente' });


        });
    },
    findAll: (req, res) => {
        bdModel.find({}).exec((err, results) => { res.status(200).send({ elementos: results }) });
    }
}

module.exports = controlador;