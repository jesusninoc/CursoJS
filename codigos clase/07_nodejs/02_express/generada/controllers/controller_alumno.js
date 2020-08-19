'use strict';

var modeloAlumno = require('../models/modeloAlumno');
var mongoConexion = require('../mongo');

var controlador = {
    prueba: (req, res) => {
        res.status(200).send({ menssage: 'llamado corretamente' });
        //console.log('metodo prueba llamado');
    },
    insertar: (req1, res1) => {
        //res1.status(200).send(res1);
        mongoConexion.conectar();
        var alumno = new modeloAlumno();
        var param = req1.body;
        alumno.nombre = param.nombre;
        alumno.apellidos = param.apellidos;
        alumno.anios = param.edad;
        alumno.curso = param.curso;
        alumno.experiencia = param.experiencia;
        console.log(alumno);

        alumno.save((error, alumnoStorage) => {
                if (error) {
                    return res1.status(500).send({ message: 'error al guardar' });
                } else {
                    mongoConexion.desconectar();
                    return res1.status(200).send({ alumno: alumnoStorage });
                }
            }

        );

    },
    listar: (req2, res2) => {
        var id = req2.query.id;
        console.log(id);
        mongoConexion.conectar();
        modeloAlumno.findById(id, (err, alumnoEncontrado) => {
            if (err) {
                return res2.status(500).send({ message: 'error en la consulta', error: err });
            }
            if (!alumnoEncontrado) {
                return res2.status(400).send({ message: 'el alumno de la consulta no existe' });
            }

            return res2.status(200).send({ alumno: alumnoEncontrado });
        });

    },
    listarTodos: (req, res) => {
        mongoConexion.conectar();
        modeloAlumno.find({}).sort('-anios').exec((err, results) => {
            if (err) {
                return res.status(500).send({ messaje: 'error en el listado' });
            }
            if (results.length == 0) {
                return res.status(400).send({ messaje: 'no hay elementos coincidentes' });
            }

            return res.status(200).send({ messaje: 'resultado correcto', resultado: results });
        });
    },
    modificar: (req, res4) => {
        var paramentroId = req.params.id;
        var paramentros = req.body;
        //var paramentros= res.query;
        mongoConexion.conectar();

        modeloAlumno.findByIdAndUpdate(paramentroId,
            (paramentros), (err, result) => {
                if (err) {
                    return res4.status(500).send({ messaje: 'error en la busqueda' });
                }
                if (!result) {
                    return res4.status(400).send({ messaje: 'no hay coincidencias en la busqueda' });
                }
                return res4.status(200).send({ messaje: 'hay coincidencias', alumno: result });
            });
    },
    eliminar: (req, res) => {

        paramId = req.params.id
        modeloAlumno.findByIdAndDelete(paramId, (err, result) => {
            if (err) {
                return res.status(500).send({ messaje: 'error en el borrado' });
            }
            if (!result) {
                return res.status(400).send({ messaje: 'no se pudo borrar, sin coincidencia' });
            }

            return res.status(400).send({ alumno: result });
        });

    },
    subirFichero: (req, res) => {
        alumnoId = req.params.id;
        nombreArhivo = 'Imagen no subida';
        if (req.files) {
            console.log(req.files);
            return res.status(200).send({ file: req.files });
        } else {
            console.log(req);
            return res.status(500).send({ messaje: 'no hay ficheros' });

        }
    }

}

module.exports = controlador;