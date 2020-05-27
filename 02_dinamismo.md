Una de las características que hacer muy potente el uso de JS es su alta disponibilidad a la hora de realizar tareas dinámicas. Para ello existen diferentes elementos que se pueden modificar y/o acceder en tiempo real: 

- DOM: Document Object Model, es una interfaz para HTML, CSS y SVG que nos facilita una representación en forma de árbol sobre la que podremos trabajar con JavaScript.
- BOM: Browser Object Model, que contiene información de todos los elementos propios del navegador y/o dispositivos donde se ejecutan como por ejemplo: versión de navegador, tamaños de pantalla, historial 

## Trabajar con el DOM

Se trata del modelo utilizado por el navegador para poder renderizar la página. Se puede asemejar a todo el código HTML escrito en cualquier editor que es interpretado y ejecutado por el propio navegador. Una de las capacidades más interesantes de JS es el acceso a este modelo y la posibilidad de su modificación de forma dinámica a tiempo real. En concreto, no solo es capaz de modificar, añadir o borrar los elementos del DOM, sino también agregar / modificar atributos, elementos CSS, así como reaccionar ante cualquier evento producido en la página

Como se ha dicho cuando hablamos de DOM, estamos hablando de todos los elementos presentes dentro del código de la página. Estos elementos reciben el nombre de nodos y se pueden clasificar en:

- Nodos de tipo elemento: aquellos que corresponden a una etiqueta HTML como p, h1, div, a, ul, form, etc..
- Nodos de tipo atributo: aquellos que hacen referencia a los atributos de los nodo elemento expuestos anteriormente. Por ejemplo un atributo href de un elemento a
- Nodos de tipo texto: el contenido textual de un nodo
- Nodos de tipo Document: la página completa
- Nodo de tipo comentario: los comentarios de la página


Imaginad el body de una página con la siguiente estructura
````
<body>

    <h1>Titulo de JS impartido por Borja Martín</h1>
    <p>Titulo correspondiente al primer curso de DAM del instituto CES Juan Pablo segundo de Formación profesional</p>
    <div id="mi_div"></div>
    <script>
    </script>
</body>
````

En este caso se renderizaría un título y un párrafo, quedando un div vacío. Este div vacío cuenta con un id, mediante la cual puede ser accedido el elemento desde el código js, de forma que se pueda poner cualquier cosa en su interior mediante programación. Si en el script asociado se utiliza el método getElementById() se puede acceder al elemento HTML con dicho id

````
    <script>
        'use strict'
        let elementoDiv = document.getElementById('mi_div');
        console.log(elementoDiv);
    </script>
````

La salida por consola sería la propia etiqueta. Una vez capturada se puede por ejemplo acceder al código HTML incrustado en la etiqueta mediante la propiedad innerHTML o modificarlo igualando aun valor concreto.

Al igual que se puede modificar y/o acceder al contenido de la etiqueta encontrada, también se pueden hacer accesos y modificaciones de estilos, atributos, etc...Por ejemplo si se quiere cambiar el style de la etiqueta a uno que se haya creado en CSS sería tan sencillo como crear el estilo en css y aplicárselo a la etiqueta encontrada

````
.estilo_js {
    background-color: burlywood;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: large;
}
````

Y el código HTML 

````
    </div>
    <script>
        "use strict";
        let elementoDiv = document.getElementById("mi_div");
        console.log(elementoDiv);
        console.log(elementoDiv.innerHTML);
        elementoDiv.innerHTML = "<ul><li>elemento uno</li></ul>";
        elementoDiv.className = "estilo_js";
    </script>
````

De igual forma se puede hacer más dinámico aun si nos creamos por ejemplo una función que pueda ser llamada desde cualquier elemento mediante un evento (que se verán más adelante) o simplemente desde la consola. Para ello en el código js se crea una función que reciba como parámetro un color y lo aplique en los estilos

````
    <script>
        "use strict";

        function cambiarColor(color) {
            elementoDiv.style.backgroundColor = color;
        }

        let elementoDiv = document.getElementById("mi_div");

    </script>
````

Esta función puede ser llamada desde la consola o desde la pulsación de un elemento por ejemplo. 

````
    <script>
        'use strict'
        let elementoDiv = document.getElementById('mi_div');
        console.log(elementoDiv);
        console.log(elementoDiv.innerHTML);
        elementoDiv.innerHTML = '<ul><li>elemento uno</li></ul>';
    </script>
````

En el ejemplo que se acaba de ver, se ha accedido al elemento mediante una ID, pero js permite acceder a los elementos mediante diferentes métodos "tradicionales" getElementById, getElementByClassName, getElementByTagName

Imaginad una web con la siguiente estructura

````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h1 id="titulo">Titulo propio impartido en el CES Juan Pablo II</h1>
    <p id="parrafo_general">
      Este título propio será impartido para los alumnos del ciclo de Desarrollo
      de Aplicaciones Multiplataforma de CES JuanPablo II. La finalidad de este
      curso es sentar las bases del lenguaje de programación web JavaScrip de
      forma que se puedan hacer Aplicaciones web dinámicas
    </p>

    <p>El contenido del curso será</p>

    <ul id="lista_contenido">
      <li>1. Introducción</li>
      <li>2. DOM y BOM</li>
      <li>3. Gestión de eventos</li>
      <li>4. Almacenamiento interno</li>
    </ul>

    <script></script>
  </body>
</html>

````

Como se puede ver, algunos nodos del DOM de la página cuentan con el atributo id. Este atributo (al igual que otros como el class o el tag) permiten a js acceder a su contenido mediante los métodos getElementById, getElementByClassName, getElementByTagName

````
    <script>
        var listaPorId = document.getElementById('lista_contenido');
        var listaPorTag = document.getElementsByTagName('ul');
        var listaPorClass = document.getElementsByClassName('class_lista');

        console.log(listaPorId);
        console.log(listaPorTag);
        console.log(listaPorClass);
    </script>
````

````
<ul id="lista_contenido" class="class_lista">..</ul>
HTMLCollection [ul#lista_contenido.class_lista, lista_contenido: ul#lista_contenido.class_lista]
HTMLCollection [ul#lista_contenido.class_lista, lista_contenido: ul#lista_contenido.class_lista]
````

La diferencia reside en que el primer método (por Id devuelve el contenido íntegro), sin embargo los dos siguientes devuelve un HTMLCollection, por lo que en la mayoría de veces nos interesará este tipo, pasa así poder acceder a sus atributos internos

Imaginad que me interesa sacar llevar a js todos los elementos de una lista ul

````
    <script>
        var lista = document.getElementsByTagName('ul')[0].children;
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            console.log(element.innerHTML);
        }
    </script>
````

En este caso se accede a la propiedad children de la lista. Sobre la variable se realiza un array para recorrer la variable y de cada elemento iterado se accede a la propiedad innerHTML

Adicionalmente se pueden utilizar una serie de métodos que son interesantes, ya que nos devuelven directamente una serie de elementos comunas:

- anchor: todas las etiquetas -a- del documento con el atributo name
- applets: todos las etiquetas applet del documento
- forms: todos las etiquetas form del documento
- images: todas las etiquetas img del documento
- links: todas las etiquetas -a- del documento con el atributo href
- scripts: todas las etiquetas script del documento

````
    <ul>
        <li><a href="https://github.com/DevelopSys/CursoJS">Repositorio DevSys</a></li>
        <li><a href="https://classroom.google.com/">Classroom</a></li>
        <li><a href="http://www.developandsys.es">Develop and system</a></li>
    </ul>

    <script>
    
        var links = document.links;
        for (let index = 0; index < links.length; index++) {
            const element = links[index];
            console.log(element.href);

        }
    </script>
````


Adicionalmente js nos permite utilizar selectores especiales que permiten realizar querys sobre todos los elementos de un DOM de forma más concreta. Estos métodos son querySelector() y querySelectorAll().

- querySelector(): permite pasar un parámetro indicando tanto id como class o etiqueta en el mismo método, incluso anidando elementos. El método devuelve el primer elemento que cumpla con los parámetros pasados, aunque exista más de uno

````
    <script>
        "use strict"
        let elementoPorClass = document.querySelector('.mi_parrafo');
        console.log(elementoPorClass);
        let elementoPorId = document.querySelector('#mi_div');
        console.log(elementoPorId);
    </script>
````


Mediante esta función se puede encontrar cualquier elemento, incluso si están anidados;

````
<body>
    <h1>Titulo de JS impartido por Borja Martín</h1>
    <p class="mi_parrafo">
        Titulo correspondiente al primer curso de DAM del instituto CES Juan Pablo segundo de Formación profesional
    </p>
    <div id="mi_div">
        Párrafo diferente
        <div class="elemento_interno"></div>
        <div class="elemento_interno_dos"></div>

    </div>
    <script>
        "use strict"
        let elementoAnidado = document.querySelector('#mi_div div');
        console.log(elementoAnidado);
    </script>
</body>
````

La salida del método document.querySelector('#mi_div div') devería devolver todos los elementos con la etiqueta div que estén dentro de una etiqueta cuyo id es mi_div. En el caso de la función querySelector solo devolvería el primero, por lo que el resultado sería:        
````
<div class="elemento_interno"></div>
````

Adicionalmente se puede realizar una query preguntando por todos aquellos elementos que tengan la clase elemento_interno_dos y que estén dentro de una etiqueta cuyo id sea mi_div:

````
        let elementoAnidadoConcreto = document.querySelector('#mi_div .elemento_interno_dos');
        console.log(elementoAnidadoConcreto);
````

En este caso solo existe una coincidencia, pero en el caso de haber varias tan solo se devolvería la primera. Al igual que en casos anteriores se puede ejecutar una función que reciba por parámetros el elemento y modifique alguno de sus elementos

````
        function modificarContenido(elemento) {
            elemento.innerHTML = 'modificaion'
        }
````



- querySelectorAll(): permite pasar un parámetro indicando tanto id como class o etiqueta en el mismo método, incluso anidando elementos. El método devuelve el todos los elementos que cumplan con los parámetros pasados, pudiendo recorrerlos y realizar tareas con ellos

Con el mismo body del ejemplo anterior

````

<body>
    <h1>Titulo de JS impartido por Borja Martín</h1>
    <p class="mi_parrafo">
        Titulo correspondiente al primer curso de DAM del instituto CES Juan Pablo segundo de Formación profesional
    </p>
    <div id="mi_div">
        Párrafo diferente
        <div class="elemento_interno"></div>
        <div class="elemento_interno_dos"></div>

    </div>
    <script>
        "use strict"
        let elementosComunes = document.querySelectorAll("#mi_div div");
        console.log(elementosComunes);
    </script>
</body>

````


El método document.querySelectorAll("#mi_div div") devuelve todos los elementos con la etiqueta div y que están dentro de un elemento con el id mi_div. En este caso devolvería dos nodos

````
        <div class="elemento_interno"></div>
        <div class="elemento_interno_dos"></div>
````

Sobre los cuales se podría actuar. Hay que tener en cuenta que esta devolución es mediante una HTMLCollection, por lo que se realiza mediante las operaciones vistas con arrays

````
        console.log(elementosComunes[0]);
        elementosComunes[0].innerHTML = 'Texto modificado del primero'
````

Si se quiere acceder a todos los elementos mediante una función:
````
        function modificarTodosPorSelector(query) {

            let elementos = document.querySelectorAll(query);
            elementos.forEach(element => {
                console.log(element);
            });
        }
````

Imaginad ahora que se quiere agregar algún elemento a todos los divs que se ha devuelvo en la consulta del selector. Para ello, en cada uno de los elementos de la colección se crea un nuevo nodo y se agrega al existente
∫∫∫
````
        function modificarTodosPorSelector(query) {

            let elementos = document.querySelectorAll(query);
            elementos.forEach(element => {
                console.log(element);
                let parrafo = document.createElement('p');
                let texto = document.createTextNode('Ejemplo de modificacion');
                parrafo.appendChild(texto);
                element.appendChild(parrafo);
            });
        }
````


## Trabajar con el BOM

Como se ha dicho, el BOM representa el acceso a información por parte del lenguaje de la capa por la cual se accede a la aplicación web: el navegador. Dentro de este BOM existen multitud de componentes, entre los cuales se encuentra:

- window.history: permite acceder a la información del navegador desde el que se visita la web. Sus principales elementos son
1. La propiedad length: que indica cuantas páginas se han visitado
2. Los métodos go, back y forward

````
        console.log(history.length);
        console.log(history.back());
        console.log(history.go(1));
        console.log(history.forward);
````

- window.navigator: permite acceder a información del cliente utilizado para acceder a la web. Alguno de sus métodos más utilizados son:

````
        console.log("appCodeName:", window.navigator.appCodeName);
        console.log("appName:", window.navigator.appName);
        console.log("appVersion:", window.navigator.appVersion);
        console.log("platform:", window.navigator.platform);
        console.log("product:", window.navigator.product);
        console.log("userAgent:", window.navigator.userAgent);
        console.log("javaEnabled:", window.navigator.javaEnabled());
        console.log("language (used):", window.navigator.language);
        console.log("language (support):", window.navigator.languages);
        console.log("conectado a internet?", window.navigator.onLine);
        console.log("mimeTypes:",window.navigator.mimeTypes);
        console.log("Plugins:", navigator.plugins);
````

En el caso de utilizar un navegador en un dispositivo movil, se pueden ejecutar algún método adicional como 

````
        navigator.getBattery()
        navigator.vibrate()
````

- window.screen: permite acceder a información sobre la pantalla del dispositivo 

````
        console.log("availTop:", window.screen.availTop);
        console.log("availLeft:", window.screen.availLeft);
        console.log("availHeight:", window.screen.availHeight);
        console.log("availWidth:", window.screen.availWidth);
        console.log("colorDepth:", window.screen.colorDepth);
        console.log("height:", window.screen.height);
        console.log("left:", window.screen.left);
        console.log("orientation:", window.screen.orientation);
        console.log("pixelDepth:", window.screen.pixelDepth);
        console.log("top:", window.screen.top);
        console.log("width:", window.screen.width);
````

- window.location: permite acceder a información sobre enlaces y/o webs

````
        var enlace = document.createElement("a");
        enlace.href = "https://github.com/DevelopSys";
        console.log("href:", enlace.href);
        console.log("protocol:", enlace.protocol);
        console.log("host:", enlace.host);
        console.log("hostname:", enlace.hostname);
        console.log("port:", enlace.port);
        console.log("pathname:", enlace.pathname);
        console.log("search:", enlace.search);
        console.log("hash:", enlace.hash);
        console.log("origin:", enlace.origin);
````

Adicionalmente, la parte de location también tiene una serie de métodos interesantes como por ejemplo

1. .assign(): permite cargar una nueva página en el navegador
2. .reload(): permite recargar la página actual 
3. .replace(): permite cargar una nueva página en el navegador sustituyendo a la que está en el historial

