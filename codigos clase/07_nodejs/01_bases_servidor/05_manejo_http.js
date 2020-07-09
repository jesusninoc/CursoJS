const http = require('http');
const url = require('url');

let servidor

function iniciarServidor(ruta, manejador) {

    servidor = http.createServer((req, res) => {

        let urlParse = url.parse(req.url);
        console.log(urlParse);
        console.log(ruta(urlParse.pathname, manejador));

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`${ruta(urlParse.pathname, manejador)}`);
    });
    servidor.listen(3000, '127.0.0.1');
}

module.exports = { iniciar: iniciarServidor };