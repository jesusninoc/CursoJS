'use strict';

let servidor = require('./servidor');
let rutas = require('./rutas');
let eventos = require('./eventos');

let eventosHandler = {
    '/uno': eventos.funcionUno,
    '/dos': eventos.funcionDos,
    '/tres': eventos.funcionTres,
    '/cuatro': eventos.funcionCuatro
};

servidor.funcionServidor(rutas.funcionRuta, eventosHandler);