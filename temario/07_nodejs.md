Lo que se ha visto hasta ahora es la ejecución de código JS directamente desde el navegador, lo que hace toda la lógica de la aplicación web muy rápida, al mismo tiempo que permite juntar HTML - CSS de forma sencilla. Sin embargo una de las limitaciones que tiene JS es que aquellas cosas que se necesiten ejecutar desde el lado del servidor no se puede hacer, como por ejemplo la conexión directa con una base de datos, o la ejecución de determinadas aplicaciones que necesitan ser llamadas desde consola. Para todo esto se utiliza NodeJS, el cual permite la ejecución de script en el lado del servidor de forma muy rápida utilizando JS. Normalmente se suele utilizar Node para hacer servicios o APIs que necesitan ser ejecutadas de forma recurrente. 

## Instalar nodejs

Para poder instalar node js devemos de entrar en la web oficial y descargar / instalar el software que se indica en el enlace <a href="https://nodejs.org/en/" target="_blank">https://nodejs.org/en/</a> . Para comprobar que todo se ha instalado bien se ejecuta el comando

````
node --version
````

La salida por consola deberá indicar la versión instalada

## NPM 

Además de todos los elementos del framework que se instalan con el paso anterior, uno de los elementos claves que está disponible es el ppm (node package managment). Este elemento permite la gestión de todas las librerías y paquetes que están disponibles para utilizarlos dentro de nuestro proyecto node. Alguno de los comandos importantes son

- Iniciar un proyecto node: desde el directorio donde queramos crear el proyecto se ejecuta el comando npm init. Este comando crea un fichero llamado package.json, el cual tiene la siguiente estructura:

````
{
  "name": "01_bases",
  "version": "1.0.0",
  "description": "",
  "main": "base.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
}

````

Mediant este fichero se define la estructura básica que tendrá el proyecto, quedando reflejados cosas como por ejemplo el punto de entrada de la aplicación, los módulos que tendrá el proyecto, etc...

- Instalar un paquete: cuando se quiere desarrollar en node, una de las posibilidades es la de utilizar los elementos que ya están desarrollados. Para ello se utiliza el comando npm install nombre_paquete, con las siguientes opciones:

````
// instala de forma genérica, estando el paquete disponible para todos los proyectos que se utilicen en el ordenador, más concretamente en la ruta /usr/local/lib/node_modules
npm install nodemon -g
// instala el paquete indicado pero solo en el proyecto en cuestión. Al ejecutar esta orden se modifica de forma automática el archivo package.json
npm install nodemon --save
````

Los paquetes descargados y disponibles se pueden ver en la carpeta node_modules.

- Instalar todas las dependencias de un proyecto: en muchas ocasiones tenemos que descargar un proyecto desde un repositorio o desde un dispositivo de almacenamiento. En estos casos el proyecto puede tener alguna dependencia que no está descargada en nuestro ordenador y por no tanto no funcionaría. Para descargar todas las dependencias del proyecto se ejecuta el comando npm install

- Ejecución de scripts: cuando se crea el fichero package.json aparece un apartado scripts. Estos scripts pueden ser llamados directamente desde consola utilizando el comando npm. Por ejemplo, de inicio hay un script creado que se llama test:

````
npm test
````

Imaginad que está instalado el paquete nodemos y se quiere crear un script con el comando nodemon base.js

````
{
    "name": "01_bases",
    "version": "1.0.0",
    "description": "",
    "main": "base.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon base.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "nodemon": "^2.0.4"
    }
}
````

Si se ejecuta el comando npm start se ejecutará todo lo indicado en el comando.

## Primeros pasos - Hola mundo

Trabajar con nodejs es lo mismo que trabajar con js pero con la ejecución de script por consola. Para ello lo único que hay que hacer es llamar al fichero js desde la consola con la orden

````
node base.js
````

Saldrá por consola todas las impresiones que se pidan, con la posibilidad de pasar argumentos directamente en la llamada

````
node base.js uno dos tres cuatro
````

Lo que acompaña a la llamada del script son los argumentos, que son recogidos desde el código con la funcion slice(). Esta funcion slice captura 3 argumentos: ruta de los binarios de ejecución, ruta del script y array de argumentos pasados

````
'use script'
console.log('hola mundo con nodejs');
var argumentos = process.argv.slice();
console.log(argumentos);
````

````
[
  '/usr/local/bin/node',
  '/Users/borja/Repositorios/CursoJS/codigos ' +
    'clase/07_nodejs/scripts/base.js',
  'uno',
  'dos',
  'tres',
  'cuatro'
]
````

Por ejemplo si quisiésemos coger solo los argumentos pasados, tendríamos llamar a la funcion slice() pasando la posición por parámetros

````
'use script'
console.log('hola mundo con nodejs');
var argumentos = process.argv.slice(2);
console.log(argumentos);
console.log(argumentos[0]);
````

````
hola mundo con nodejs
[ 'uno', 'dos', 'tres', 'cuatro' ]
uno
````

Como se ha comentado, para poder ejecutar el código nodejs creado no vale con abrir un navegador y  hacer una llamada a una página ya que el código se ejecuta en un servidor no directamente en el navegador. Por ello es necesario arrancar el servidor cada vez que se quiera mostrar el resultado, el cual aparecerá en la consola. Para ello se ejecuta el comando

````
node nombre_fichero.js
````

Lo malo que tiene esto es que cada vez que se hace un cambio en el fichero hay que volver a arrancar el servidor con el mismo comando. Sin embargo se puede instalar un paquete que deja el servidor abierto y deja ejecutando el servidor pudiendo mostrar los cambios sin necesidad de reiniciarlo. El paquete se llama nodemon y se instala con npm

````
npm install nodemon --save
````

En este caso se utilizar una salida por consola, pero una de las grandes funcionalidades de node es la creación de un servidor que permite la ejecución de aplicaciones. Para ello se utiliza el módulo http, principal uso de node, el cual no requiere de ninguna instalación vía npm ya que va incluido en la instalación de node. Los pasos para pode crear y utilizar el servidor son los siguientes:

1. Crear una variable con el contenido del modulo http. Para ello se utiliza un requiere de http

````
var http = require('http');
````

2. Con la variable creada se accede al método createServer que crea el servidor. Este método obtiene una funcion de callback con dos parámetros, la petición y la respuesta. Se utiliza el método writeHead de la respuesta para indicarle que en el caso de obtener un código html 200 escriba un formato texto plano, y se utiliza el método end para escribir lo se quiera que aparezca en el navegador

````
var servidor = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World');
});
````

3. Se indica mediante el método listen de la variable servidor cual es la dirección y puerto que se utilizará en el servidor creado

````
servidor.listen(8081, '127.0.0.1');
````

4. Si se quiere poner algo por la consola de node se utiliza un log. El último paso es utilizar un navegador llamando a la ip y puerto indicado en la creación del servidor

El código completo sería el siguiente, con la diferencia de poner un texto html en la página mostrada en el navegador

````
var http = require('http');
var servidor = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Ejemplo</h1>');
});

servidor.listen(8081, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8081/');
````

## Tareas básicas 

### Obtención de información
Node tiene por defecto una serie de variables que nos permiten acceder a multitud de información y funcionalidades sin necesidad de instalar módulos. Uno de estos elementos la variable process, mediante la cual se puede acceder a la información del hilo que se ejecuta. Para poder acceder a estas informaciones se utiliza el siguiente código:

````
// Gestión del proceso node

// obtención de información sobre el proceso node
console.log(process.platform);
console.log(process.pid);
console.log(process.release);
console.log(process.title);
console.log(process.cwd());
console.log(process.title);

// generación del evento exit
process.on('exit', () => {
    console.log('saliendo de la aplicación');
});

// ejecución del elemento indicado cuando se realiza una vuelta del event loop
process.nextTick(() => {
    console.log('vuelta realizada');
});
````

### Gestión de eventos

Una de las capacidades que tiene node es la gestión de eventos en momentos determinados asociados a un identificador. Para ello se utiliza el elemento eventEmmiter

````
let gestorEventos = new EventEmitter();
````

Este elemento tiene un método llamado on que asocia un identificador con una función creada. Hay que tener en cuenta que con la ejecución de estas líneas de código no se hace nada, simplemente se asocia la ejecución de la función indicada al identificador:

````
gestorEventos.on('identificador', realizarAlgo);
function realizarAlgo() {
    console.log('ejecución de la función realizada');
}
````

Para poder ejecutar el contenido de identificador se 'activa' mediante el método emmit

````
gestorEventos.emit('identificador');
````

El código completo del ejemplo sería

````
const { EventEmitter } = require("events");
let gestorEventos = new EventEmitter();
gestorEventos.on('identificador', realizarAlgo);

function realizarAlgo() {
    console.log('ejecución de la función realizada');
}

gestorEventos.emit('identificador');
````

De la misma forma en el caso de querer pasar parámetros al método asociado al identificador, se podría hacer agregando argumentos al método emmit

````
const { EventEmitter } = require("events");
let gestorEventos = new EventEmitter();
gestorEventos.on('identificador', realizarAlgo);

function realizarAlgo(paramentro) {
    console.log(`ejecución de la función realizada desde la plataforma ${paramentro}`);
}

gestorEventos.emit('identificador', process.platform);
````

### Gestión de módulos

Ya se ha comentado antes que una de las características más importantes de node es la posibilidad de utilizar código que ya está desarrollado en nuestro proyecto mediante la instalación de módulos con el comando npm install. Una vez los módulos están instalados en nuestro proyecto aparecen en el  archivo package.json y para utilizarlos en el código se utiliza la instancia mediante require y como parámetro el nombre del módulo que se quiere cargar
 
````
var http = require('http');
````

Esta variable creada tendrá toda la funcionalidad del módulo http.

De la misma forma que podemos importar los módulos que se han descargado mediante el gestor de paquetes, también se puede crear y exportar nuestros propios módulos para que estos puedan ser utilizados en otras partes del proyecto,. Para esto se debe utilizar la orden export.module = { lo_que_se_quiera_exportar}

Para ello los pasos que hay que realizar son los siguientes:

1. Crear el .js con todas las funciones que se quieran crear y terminar con la orden module.exports
````
function funcionaExportar() {
    console.log('ejecución de una funcion que es ha sido importada');
}

module.exports = {
    funcion: funcionaExportar,
    funcionFlecha: (param) => {
        console.log('ejecución de una funcion que es ha sido importada como función de flecha con el parámetros ' + param);
    },
    variable: false
};
````

Hay que tener en cuenta que se pueden exportar tanto funciones que ya están creadas como crear las propias funciones en el .json que se va a exportar. Este json es el formato utilizado para acceder a los datos desde el archivo de importación

2. Importar módulos con la palabra requiere y la ruta del archivo que se quiere importar

````
// módulo importado http
let packageName = require('http');

// módulo importado propio
let propio = require('./04_modulos_exp.js');

console.log(propio);
propio.funcion();
propio.funcionFlecha('ejemplo');
````

Una vez que está importado y guardado en una variable, se puede acceder a  cualquier elemento del .json generado

## Servidor web con MVC

El modulo core de node ya se ha comentado que se trata de un servidor web donde se ejecutan todos los scripts que se quieran, bien sea un evento o la ejecución de un servicio que accede y modifica el contenido de una página web. Para poder hacer eso de forma lo más correcta posible es necesario separar tantas capas de negocio como se puedan, independizando cada una de las funcionalidades. Para ello se van a crear módulos que trabajan de forma independiente pero que se puede comunicar entre sí. Los módulos que se van a crear son:

1. Servidor: el cual podrá recibir peticiones url, decodificarlas y actuar ante ellas con eventos diferetes
2. Rutas:  el cual actuará ante una ruta determinada
3. Funciones: el cual creará todas las funciones necesarias para cada una de las rutas que podrán ser llamadas desde el servidor web

Esta separación es importante ya que cuando la aplicación web tenga un volumen considerable la funcionalidad estará definida cada una en un archivo, sin necesidad de mezclar código. De no hacerlo el proyecto se puede convertir en algo bastante poco legible y muy difícil de trazar

Todos los módulos se juntarán en un archivo llamado índex.html que será el encargado de comunicarlos. Para poder hacer esta implementación se seguirán los siguientes pasos:

### Creación de la estructura

1. Creación del servidor web: 

````
// servidor.js
'use strict';
let http = require('http');
let servidor;

function iniciarServidor() {
    servidor = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Servidor iniciado</h1>');
    });
    servidor.listen(3000, '127.0.0.1');
}

module.exports = { funcionServidor: iniciarServidor };
````

Simplemente se realiza la carga del módulo http y se crea un servidor web que escucha la IP 127.0.0.1:3000 y responde con un mensaje. El módulo es exportado para que pueda ser llamado desde otro fichero

2. Creación del manejo de los eventos: se crea un archivo nuevo donde aparecen todas las funcionalidades que tendrá el servidor web, las cuales dependerán de la ruta llamada

````
// eventos.js
function funcionLLamadaUno() {
    console.log('función llamada desde la ruta uno');
}

function funcionLLamadaDos() {
    console.log('función llamada desde la ruta des');
}

function funcionLLamadaTres() {
    console.log('función llamada desde la ruta tres');
}

function funcionLLamadaCuatro() {
    console.log('función llamada desde la ruta cuatro');
}

module.exports = { funcionUno: funcionLLamadaUno, funcionDos: funcionLLamadaDos, funcionTres: funcionLLamadaTres, funcionCuatro: funcionLLamadaCuatro }

// también se puede hacer de esta forma
exports.funcionLLamadaUno = funcionLLamadaUno;
exports.funcionLLamadaDos = funcionLLamadaDos;
exports.funcionLLamadaTres = funcionLLamadaTres;
exports.funcionLLamadaCuatro = funcionLLamadaCuatro;

````

En vez de exportarlas como un módulo también se pueden exportar de forma individual cada una de las funciones, pudiendo acceder a ellas en cualquier momento

3. Creación del las rutas: módulo encargado de ejecutar las funciones creadas en el punto 4 cuando una ruta es llamada

````
// rutas.js
function manejarRuta() {
    console.log('Servidor web con una nueva ruta cargada');
}

module.exports = { funcionRuta : manejarRuta};
````
 Simplemente se exporta la funcion que se ejecutará cuando alguna ruta sea llamada

4. Creación del index:

````
// index.js
'use strict';

let servidor = require('./servidor');
let rutas = require('./rutas');
let eventos = require('./eventos');

servidor.funcionServidor();
````

Simplemente se cargan cada uno de los  módulos creados en los puntos anteriores y se llama a la función que levanta el servidor

### Relacionar módulos

En los siguientes puntos lo que se necesita es relacionar módulos entre sí para que las funcionalidades se puedan ejecutar

1. El servidor debe poder analizar la url recibida para poder actuar ante ella. Adicionalmente tendrá que recibir como parámetro la función del módulo ruta para poder ejecutarla cuando llega una petición

````
'use strict';
let http = require('http');
const url = require('url');
let servidor;

function iniciarServidor(ruta) {
    servidor = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Servidor iniciado</h1>');
        console.log(`La petición del servidor es a ${url.parse(req.url).pathname}`);
        ruta();
    });
    servidor.listen(3000, '127.0.0.1');
}

module.exports = { funcionServidor: iniciarServidor };
````

El módulo url se encarga de parsear una url y 'cortarla' en partes para que pueda ser utilizada. De esto se encarga el método parse, obteniendo de la url el pathname

````
url.parse(req.url).pathname
````

El parámetro pasado en el método es la función exportada del módulo de rutas, siendo ejecutada sin más (por el momento). Para que esto funcione en el index se debe pasar por parámetros a la ejecución del método funcionServidor, la función exportada del módulo de las rutas (una de las funcionalidades de js es poder pasar una función como parámetros)

````
'use strict';

let servidor = require('./servidor');
let rutas = require('./rutas');
let eventos = require('./eventos');

servidor.funcionServidor(rutas.funcionRuta);
````

Con este punto lo que se consigue es que al acceder a cualquier petición url el servidor web actúe y ejecute por consola

````
// tras llamada a 127.0.0.1:3000/prueba
// ejecutado desde el módulo del servidor
La petición del servidor es a /prueba
// ejecutado desde el módulo de las rutas
Servidor web con una nueva ruta cargada
````

2. Las rutas: para que la función de las rutas pueda actuar de forma personalizada ante una petición URL, debe recibir como parámetro un string con el nombre de la ruta

````
// rutas.js
function manejarRuta(path) {
    console.log('Servidor web con una nueva ruta cargada: ' + path);
}

module.exports = { funcionRuta: manejarRuta };
````

Para que esto funcione, es necesario pasar como parámetro a la función de las rutas cuando se produce una petición en el servidor web. Para eso se utiliza el pathname sacado en el punto anterior

````
// servidor.js
'use strict';
let http = require('http');
const url = require('url');
let servidor;

function iniciarServidor(ruta) {
    servidor = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Servidor iniciado</h1>');
        ruta(url.parse(req.url).pathname);
    });
    servidor.listen(3000, '127.0.0.1');
}

module.exports = { funcionServidor: iniciarServidor };
````

Con esto se consigue que la funcionalidad se ejecute desde el archivo de rutas.js y este sea llamado dependiendo de las peticiones obtenidas en el archivo servidor.js


4.   Asociar diferentes eventos a rutas: Por último queda asociar las diferentes rutas a los eventos creados en el archivo eventos.js. Para ello se crea un objeto json en el index.js donde se asocia el nombre de la ruta con la función exportada del módulo de rutas

````
// index.js
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
````

Con esto lo que se consigue es que el servidor tenga toda la definición de formas de actuar con un par clave - valor, asociando el nombre de la ruta con la función que se quiere ejecutar. Para que esto funcione, en la función del servidor se trata el eventosHandler.

````
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
````

Ademas de recibirlo como parámetro se lo pasa a la función de las rutas, para que sea dicha función la encargada de gestionar el funcionamiento

5. Actuar ante una ruta: Inicialmente la función de las rutas solo ejecutaba un log con el nombre de la ruta llamada, pero al pasarle como parámetros el path y los eventos ya se puede diferenciar. 

````
function manejarRuta(path, eventos) {
    console.log('Servidor web con una nueva ruta cargada: ' + path);
    console.log(eventos);
}

module.exports = { funcionRuta: manejarRuta };
````

Con esto lo que se consigue es tener en la función el nombre de la ruta llamada y un json con el par nombre_ruta : acción. Simplemente lo único que quedaría sería acceder a la llamada de la ruta correspondiente de la siguiente forma

````
// se accede a la posición cuya clave es el nombre de la ruta
eventos[path]()
````

Si se pone así tal cual puede dar error ya que por ejemplo en la llamada del servidor se puede colar alguna petición como por ejemplo la del favicon. Para solucionarlo, simplemente se pregunta por el tipo de la llamada

````
function manejarRuta(path, eventos) {
    console.log('Servidor web con una nueva ruta cargada: ' + path);
    //console.log(eventos);
    //eventos[path]();
    if (typeof eventos[path]() === 'function') {
        eventos[path]();
    } else {
        console.log('Llamada incorrecta, no se trata de una función');
    }

}

module.exports = { funcionRuta: manejarRuta };
````
