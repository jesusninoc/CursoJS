Para descargar e instalar jQuery en nuestro proyecto se puede realizar bien mediante archivo e indexarlo como script o directamente referenciarlo desde la web donde ya está subido, lo que se conoce como minificada. La forma más sencilla es la segunda ya que tan solo se debe incluir en el head de la web la siguiente línea de código:

````
<script   src="https://code.jquery.com/jquery-3.5.1.min.js"   integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="   crossorigin="anonymous"></script>
````

Por lo que el código de la web quedaría de la siguiente forma

````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>

<body></body>

</html>
````

Para saber que todo se ha cargado de forma correcta se pude comprobar ejecutando un script muy simple que realiza un log dentro de la consola

````
<script>
    $(document).ready(function() {
        console.log('todo ok');
    });
</script>
````

En código js con jQuery metido podemos agregar toda la funcionalidad que hemos visto en js pero de forma más sencilla. Para poder utilizar los elementos que jQuery nos ofrece simplemente tenemos que poner la palabra jquery o el símbolo $ antes de lo que se quiera llamar:

````
jquery(selector).funcion_o_propiedad;
$(selector).funcion_o_propiedad;
````


Selectores:

- Selector de id: muy parecido al selector de js puro. Para poder utilizar este selector lo único que se necesita es dentro del la llamada al código jQuery poner el símbolo # seguido del nombre del id del elemento al que queremos hacer referencia.

Imaginad el siguiente ejemplo

````
<body>

    <h1 id='titulo'>Primera web con JavaScript y JQuery</h1>
    <p id='p1'>Parrafo uno de la página</p>
    <p id='p2'>Parrafo dos de la página</p>
    <p id='p3'>Parrafo tres de la página</p>
    <script>
        $('#p1')
    </script>
</body>
````

En este caso la llamada jquery hace referncia al elemento cuya id es p1. A partir de aquí se pueden acceder a sus propiedades o funciones para actuar ante cualquier cosas.

````
        // muestra el texto del elemento
        console.log($('#p1').text());
        // añade texto al elemento seleccionado
        $('#p1').append(' texto que se quiere añadir al nodo seleccionado');
````

- Selector de clase: idéntico al anterior, con la única diferencia que se obtienen los elementos que pertenecen a una clase concreta. Lo normal es que varios elementos pertenezcan a la misma clase, por lo que este tipo de selector va a seleccionar varios elementos al mismo tiempo, pudiendo ser accedido por un foreach por ejemplo. 

Siguiente el ejemplo anterior si se le da una misma clase a varios elementos

````
<body>
    <h1 id="titulo">Primera web con JavaScript y JQuery</h1>
    <p id="p1" class="parrafo">Parrafo uno de la página</p>
    <p id="p2">Parrafo dos de la página</p>
    <p id="p3" class="parrafo">Parrafo tres de la página</p>
    <p id="p1">Parrafo uno de la página otra vez</p>
    <script>
        $(document).ready(function() {
            console.log("todo ok");
        });

        let elementosClase = $(".parrafo");
        console.log(elementosClase);
        for (let index = 0; index < elementosClase.length; index++) {
            const element = elementosClase[index];
            console.log(element);
            if (0 % 2 === 0) {
                element.innerHTML = "asdasd";
            } else {
                element.text = "Este parrafo no es múltiplo de dos";
            }
        }
    </script>
</body>

````

En el caso de querer cambiar de golpe a todos los elementos una propiedad no es necesario recorrer la colección obtenida, sino que se podría hacer desde la propia colección

````
        let elementosClase = $(".parrafo");
        elementosClase.text("Texto cambiado conjunto");
        elementosClase.css("font-size", "20px");
````

- Selector de étiqueta: misma funcionalidad que el caso anterior pero encontrando todos aquellos elementos que tengan una etiqueta determinada. Sigue la siguiente estructura

-  Selector de atributo: idéntico al anterior con la diferencia que me permite seleccionar un elemento de HTML que tenga algún elemento puesto con un valor determinado.

Imaginad una lista con diferentes tipos de input donde cada uno de ellos tiene el atributo type es diferente

````
    <ul>
        <label for="opcion1">Opción 1</label><input type="radio" id="opcion1">
        <label for="opcion2">Opción 2</label><input type="checkbox" id="opcion2">
        <label for="opcion3">Opción 3</label><input type="search" id="opcion3">
        <label for="opcion4">Opción 4</label><input type="number" id="opcion4">
    </ul>
````


Si se quieren obtener todas aquellas input de tipo radio, es tan sencillo como utilizar los caracteres [] para indicar el atributo buscado y su valor

````
        $(document).ready(function() {
            console.log("todo ok");
            let elementos = $('[type="radio"]');
            console.log(elementos);
        });
````

Hay que tener en cuenta que esto se puede juntar con el resto de búsquedas.

````
        $(document).ready(function() {
            console.log("todo ok");
            let elementos = $('input #opcion1 [type="radio"]');
            console.log(elementos);
        });
````


$(document): Hace referencia a la pagina web completa. Es algo parecido al document de js puto. Dentro de este elemento:

- ready(funcion_callback) evento que indica que la página está cargada