var http = require('http');
var servidor = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Ejemplo</h1>');
});

servidor.listen(8081, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8081/');