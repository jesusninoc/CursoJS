const manejo_http = require('./05_manejo_http');
const rutas = require('./05_rutas');
const eventos = require('./05_funciones_eventos');

let manejador = {};
manejador["/uno"] = eventos.llamadaRuta1;
manejador["/dos"] = eventos.llamadaRuta2;
manejador["/tres"] = eventos.llamadaRuta3;
manejador["/cuatro"] = eventos.llamadaRuta4;
//console.log(manejador);


manejo_http.iniciar(rutas.funcion, manejador);