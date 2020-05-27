Una de las capacidades de JS es la capacidad de asociar una parte gráfica con una parte lógica. Cuando se está realizando una aplicación web, si solo nos centramos en los elementos gráficos (HTML y CSS), su apariencia quedará muy bien pero tendrá un contenido totalmente estático, de forma que ante cualquier cambio será necesario acceder al código y realizar las modificaciones necesarias. Esto es totalmente inviable en proyectos que requieran por ejemplo de una interacción media por parte del usuario . El ejemplo más claro de esto son los formularios o la forma de interactuar ante cualquier evento.

## Eventos

Imaginamos un formulario normal y corriente en HTML

````
    <form id='formulario'>
        <input type="text" inputmode="latin">
        <button type="button">Pulsar para enviar</button>
    </form>
````

En el caso de querer controlar la pulsación del botón directamente, js nos ofrece la posibilidad de asociar una acción a un evento concreto del elemento. Para ello se le pone como atributo al button un onclick, el cual permite asociar una ejecución al elemento que lleva dicho atributo

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id='formulario'>
        <input type="text" inputmode="latin">
        <button type="button" onclick="saludar()" id='boton'>Pulsar para enviar</button>
    </form>

</body>

<script>
    function saludar() {
        console.log('Botón pulsado');
    }
</script>
````


Como se puede ver, al botón se le asocia un evento onclick el cual está igualado a una función que nos hemos creado en el script. De esta forma cuando el botón sea pulsado, se escribirá en consola el texto indicado. Esto es lo que se conoce como eventos en línea. 

El ejemplo anterior se puede modificar de forma que la función pueda admitir por parámetros tantos elementos como sea necesario. Por ejemplo se puede pasar por parámetro el contenido del campo de texto del formulario

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id='formulario'>
        <input type="text" inputmode="latin" id="nombre">
        <button type="button" onclick="saludar(nombre.value)" id="boton">Pulsar para enviar</button>
    </form>

</body>

<script>
    function saludar(nombre) {
        console.log(`El nombre introducido es ${nombre}`);
    }
</script>
````

Se pueden pasar tantos elementos como sean necesarios. En el siguiente ejemplo se capturan y pasan por parámetros tres elementos, necesitando convertir uno de ellos a fecha

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id='formulario'>
        <input type="text" inputmode="latin" id="nombre" placeholder="introduce tu nombre">
        <input type="text" inputmode="latin" id="apellido" placeholder="introduce tu apellido">
        <input type="date" id="fecha">

        <button type="button" onclick="saludar(nombre.value, apellido.value,fecha.value)" id="boton">Pulsar para enviar</button>
    </form>

</body>

<script>
    function saludar(nombre, apellido, fecha) {
        fecha = new Date(fecha);
        fecha.getYear()

        console.log(`Hola ${nombre} ${apellido}, naciste el ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`);
    }
</script>
````


Los eventos más comunes en js son los siguientes:

- onchange: An HTML element has been changed

- onclick: The user clicks an HTML element

- onmouseover: The user moves the mouse over an HTML element

- onmouseout: The user moves the mouse away from an HTML element

- onkeydown: The user pushes a keyboard key

- onload: The browser has finished loading the page

Hay que tener en cuenta que muchas veces los parámetros capturados e introducidos es necesario castearlos a los tipos concretos ya que si no daría fallo. En este ejemplo se simula el funcionamiento de una calculadora de dos operandos

````
<body>
  
    <h1>Formulario de calculo</h1>

    <form id="formulario_calc">
        <input type="number" id="op1" />
        <input type="number" id="op2" />
        <input type="radio" id="suma" name="operacion" value="1" />
        <label for="suma">Suma</label>
        <input type="radio" id="resta" name="operacion" value="2" />
        <label for="resta">Resta</label>
        <input type="radio" id="multiplicacion" name="operacion" value="3" />
        <label for="multiplicacion">Multiplicación</label>
        <input type="radio" id="division" name="operacion" value="4" />
        <label for="division">División</label>
        <button type="button" onclick="realizarCalculo(op1.value, op2.value)" id="boton_calc">
        calcular
      </button>
    </form>
</body>

<script>
    function realizarCalculo(op1, op2) {
        operacion = document.querySelector('input[name="operacion"]:checked').value;
        var resultado;
        switch (parseInt(operacion)) {
            case 1:
                resultado = op1 + op2;
                console.log('entra');
                break;
            case 2:
                resultado = op1 - op2;
                break;
            case 3:
                resultado = op1 * op2;
                break;
            case 4:
                resultado = op1 / op2;
                break;
        }

        console.log(resultado);

        console.log(`El resultado de realizar la suma es ${resultado}`);
    }
</script>
````

En este caso sacará por consola el resultado de la operación del valor introducido en el campo op1 y en el op2, dependiendo de cuál sea la operación. Hay que tener especial cuidado porque los elementos los recoge como texto, por lo que el resultado de sumar 1 y 5 sería 15 ya que los concatena (recordad el tipado dinámico). El resto de operaciones las haría sin problema ya que no puede asignar operaciones sobre cadenas de * / y -. Para solucionar esto basta con forzar a que los parámetros sean números, modificando la función de la siguiente forma

````
<script>
    function realizarCalculo(op1, op2) {
        operacion = document.querySelector('input[name="operacion"]:checked').value;
        var resultado;
        switch (parseInt(operacion)) {
            case 1:
                resultado = op1 + op2;
                console.log('entra');

                break;
            case 2:
                resultado = op1 - op2;
                break;
            case 3:
                resultado = op1 * op2;

                break;
            case 4:
                resultado = op1 / op2;
                break;
        }

        console.log(resultado);

        console.log(`El resultado de realizar la suma es ${resultado}`);
    }
</script>
````

Aunque esto se verá más adelante con detalle, js permite no solo seleccionar los elementos del DOM de una página, sino también modificar su contenido. Por ejemplo mediante métodos como getElementById() se puede utilizar un elemento HTML para mostrar la salida de una función js

````
<body>
    <h1>Formulario de introducción de datos</h1>

    <form id="formulario_calc">
        <input type="number" id="op1" />
        <input type="number" id="op2" />
        <input type="radio" id="suma" name="operacion" value="1" />
        <label for="suma">Suma</label>
        <input type="radio" id="resta" name="operacion" value="2" />
        <label for="resta">Resta</label>
        <input type="radio" id="multiplicacion" name="operacion" value="3" />
        <label for="multiplicacion">Multiplicación</label>
        <input type="radio" id="division" name="operacion" value="4" />
        <label for="division">División</label>
        <button type="button" onclick="realizarCalculo(op1.value, op2.value)" id="boton_calc">
        calcular
      </button>
    </form>

    <p id="parrafo_destino"></p>

</body>

<script>
    function realizarCalculo(op1, op2) {
        operacion = document.querySelector('input[name="operacion"]:checked').value;
        var resultado;
        switch (parseInt(operacion)) {
            case 1:
                resultado = parseInt(op1) + parseInt(op2);
                console.log('entra');

                break;
            case 2:
                resultado = op1 - op2;
                break;
            case 3:
                resultado = op1 * op2;

                break;
            case 4:
                resultado = op1 / op2;
                break;
        }

        console.log(resultado);

        console.log(`El resultado de realizar la suma es ${resultado}`);
        parrafo = document.getElementById('parrafo_destino').innerHTML = `El resultado de realizar la suma es ${resultado}`;
    }

</script>

````

Como se ha visto en el código HTML se asigna directamente el evento asociado. Esta técnica se llama en linea y en muchas ocasiones puede resultar algo tedioso ya que hay que ir dando elemento a elemento la funcionalidad. Existe otra posibilidad que es la de asociar un escuchador al elemento desde código. Para ello se utilizan los listener

````
<body>

    <p id="parrafo_destino"></p>
    <button id='botonListener' type="button">Evento desde código</button>

</body>
````

Imaginad el HTML anterior donde existe un párrafo con un id determinado y un botón con otro id asociado. Mediante estos elementos se puede encontrar el elemento desde el código js

````
<script>
    let elemento = document.querySelector('#botonListener');
    console.log(elemento);
</script>
````

Una vez encontrado el elemento se puede poner un escuchador con la siguiente sintaxis
````
elemento.addEventListener(evento_escucha, nombre_funcion_asociada,valor_defecto);
````

Con esa sintaxis el elemento concreto se podría a escuchar de forma automática. En el ejemplo del HTML anterior sería de la siguiente forma:

````
    let elemento = document.querySelector('#botonListener');
    console.log(elemento);
    elemento.addEventListener('click', pulsarBoton);

    function pulsarBoton() {
        console.log('pulsación realizada');
        let elementoTexto = document.createTextNode('Texto a poner en el nuevo elemento');
        document.querySelector('#parrafo_destino').appendChild(elementoTexto)
    }
````

Es importante tener en cuenta que del mismo modo que se pueden añadir escuchadores a los elementos , también se pueden eliminar escuchadores indicando el tipo de evento que se quiere borrar y la función que tiene asociada

````
    let elemento = document.querySelector('#botonListener');
    elemento.removeEventListener('click', cambiarColor);
````

Al igual que se ha definido en el ejemplo un evento de tipo click, se pueden asociar tantos como sean necesarios. De la misma forma, no es necesario declarar una función y ponerla en el listener, sino que se puede hacer directamente

````
    elemento.style.fontSize = '10px';
    elemento.addEventListener('mouseover', function() {
        console.log('El ratón está por encima del elemento');
        elemento.style.fontSize = '20px';

    });

    elemento.addEventListener('mouseout', function() {
        elemento.style.fontSize = '10px';
        console.log('El ratón está por fuera del elemento');

    });
````

Cuando se trabaja con js el orden de carga es muy importante. Esto quiere decir que si nosotros ejecutamos un script antes de los elementos HTML (en el head por ejemplo) puede que muchos de los elementos que intervienen en el código no se encuentran al no haberse cargado

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        let elemento = document.querySelector('body div[id=container]')
        console.log(elemento);
    </script>

</head>

<body>
    <div id="container">
        <h1>Ejemplo de carga de elementos</h1>
    </div>
</body>
</html>
````

En este ejemplo se busca un elemento cuya etiqueta es div y su id es container. Evidentemente este elemento existe dentro del código HTML pero como el script se está ejecutando antes que los elementos HTML el resultado es nulo. Sin embargo si se cambia el orden, la salida si será correcta

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="container">
        <h1>Ejemplo de carga de elementos</h1>
    </div>
</body>

<script>
    let elemento = document.querySelector('body div[id=container]')
    console.log(elemento);
</script>

</html>
````

Otra posibilidad es utilizar los listen para indica que cuando el navegador termine de realizar la carga del HTML ejecute los elementos que se quieran

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.addEventListener('load', function() {
            console.log('carga terminada');
            let elemento = document.querySelector('body div[id=container]')
            console.log(elemento);
        })
    </script>
</head>

<body>
    <div id="container">
        <h1>Ejemplo de carga de elementos</h1>
    </div>
</body>

</html>
````

Con esto, lo que se consigue es poner un escuchador a la ventana para que cuando termine la carga se ejecute la función indicada la cual realiza la instancia de los elementos. En este caso pese a que el script se ejecuta antes que el código HTML, se indica que parte del mismo se ejecute cuando termine de hacer la carga, por lo que la salida no será nula