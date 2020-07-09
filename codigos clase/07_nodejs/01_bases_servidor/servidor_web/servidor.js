'use strict';
let http = require('http');
const url = require('url');
let servidor;

function iniciarServidor(ruta, eventos) {
    servidor = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Servidor iniciado</h1>');
        //console.log(`La petición del servidor es a ${url.parse(req.url).pathname}`);
        ruta(url.parse(req.url).pathname, eventos);
    });
    servidor.listen(3000, '127.0.0.1');
}

module.exports = { funcionServidor: iniciarServidor };