// funciones
// public void nombre (argumentos o parametros - tipo nombre, tipo nombre- ){};

// function nombre (argumentos - param1, param2, param3) : number  { return }

function miPrimeraFuncion() {
    console.log('función ejecutada');
}

function funcionConParametros(parametro1, parametro2) {
    if (typeof (parametro1) == 'undefined' || typeof (parametro2) == 'undefined') {
        console.log('cuidado que falta algun parametro');

    } else {
        console.log(`Los parámetros pasados son: ${parametro1} ${parametro2}`);
    }
}

function funcionConRetorno(operador1, operador2) {
    return operador1 + operador2;
}

function funcionConValoresDefecto(param1, param2) {

    param1 = param1 || "asdasd";
    param2 = param2 || "asdasdasd";
    console.log(`Los parámetros pasados son: ${param1} ${param2}`);
}

function funcionSinArgumentos() {

    console.log(arguments);
    console.log(`funcion llamada con ${arguments.length} argumentos invisibles`);
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}

// miPrimeraFuncion();
// funcionConParametros(234, 4234);
// console.log(funcionConRetorno(2, 4));
// funcionConValoresDefecto();
// funcionSinArgumentos(4, 5, "asdas");

// funcion flecha 
// parametro => ejecucion
// (param1,param2) => ejecucion
// () => {ejecucion}
// () => {ejecucion return asd}

let mifucionFlecha = () => console.log('ejecucion realizada desde una funcion de flecha');
let miFuncionFlechaParam = (param1, param2) => {
    console.log(`Los parámetros son ${param1}, ${param2}`);
    // !false && !false
    if (!isNaN(param1) && !isNaN(param2)) {
        console.log(`La suma de los dos numeros es ${param1 + param2}`);
    }
};

let mifuncionFlechaRetorno = parametro1 => {
    if (typeof (parametro1) == 'string') {
        parametro1 = parametro1.concat(' algo añadido');
    }
    return parametro1;
}

// mifucionFlecha();
// miFuncionFlechaParam(2, 4);
//console.log(mifuncionFlechaRetorno('asd'));
//console.log(mifuncionFlechaRetorno(1312));

function funcionConCallback(param1, callback) {
    console.log(param1);
    callback(param1);
}

function sencilla() {
    console.log('ejecucion desde la funcion sencilla');
}

//funcionConCallback(1, sencilla);
/*funcionConCallback("algo por parametros", (param1) => {
    console.log('ejecucion desde una funcion sencilla de flecha con paramentro ' + param1)
});*/
/*funcionConCallback(1, function() {
    console.log('llamado desde una funcion sencilla no de flecha');
});*/

() => { console.log('ejecucion desde una funcion sencilla de flecha desde fuera') };

function funcionConRetornoEscpecial(params) {

    console.log('Ejecucion desde la funcion primitiva');
    return function (params) {
        console.log('Ejecución desde la funcion que retorna');
        return "asd";
    }
}

funcionConRetornoEscpecial(123);

