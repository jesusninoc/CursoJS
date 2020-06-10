// operaciones 

// asignación 
let variableUno = 5;
let variableDos = 7;
variableUno = variableDos;;

// suma, resta, multiplicacion, division, resto;

// el valor de la operación se guarda en la variableUno
let varUnoSuma = 4;
let varDosSuma = 5;
varUnoSuma += varDosSuma
console.log(`El resultado de la suma es ${varUnoSuma}`);
// valor de varUno = 9
// log con ` ${}

let varUnoResta = 5;
let varDosResta = 2;
varUnoResta -= varDosResta
console.log(`El resultado de la resta es ${varUnoResta}`);
// valor de varUno = 3
// log con ` ${}

let varUnoMulti = 4;
let varDosMulti = 5;
varUnoMulti *= varDosMulti
console.log(`El resultado de la multiplicación es ${varUnoMulti}`);
// valor de varUno = 20
// log con ` ${}

let varUnoDiv = 4;
let varDosDiv = 2;
varUnoDiv /= varDosDiv
console.log(`El resultado de la division es ${varUnoDiv}`);
// valor de varUno = 2
// log con ` ${}

let varUnoMod = 4;
let varDosMod = 2;
// 4 / 2 = 0 resto = 0
varUnoMod %= varDosMod;
console.log(`El resultado del módulo es ${varUnoMod}`);
// valor de varUno = 0
// log con ` ${}

// ahora su valor es 9
varUnoSuma++;
console.log(`despues de incrementar en 1 su valor es de ${varUnoSuma}`);
// ahora su valor es de 10
varUnoSuma--;
varUnoSuma--;
console.log(`despues de decrementar en 2 su valor es de ${varUnoSuma}`);
// ahora su valor es de 8

// comparadores

variableUno = 10;
variableDos = 20;
let resultadoComparacion;

// mayor igual

// 10 > 20 resultado false;
resultadoComparacion = variableUno > variableDos;
resultadoComparacion = variableUno >= variableDos;
// resultado true
resultadoComparacion = variableUno < variableDos;
resultadoComparacion = variableUno <= variableDos;
// resultado false
resultadoComparacion = variableUno == variableDos;

variableUno = 10;
variableDos = 10;

// resultado true
resultadoComparacion = variableUno <= variableDos;

variableUno = 10;
variableDos = '20';

// resultado true
resultadoComparacion = variableUno == variableDos;
console.log(resultadoComparacion);

//resultado 
resultadoComparacion = variableUno === variableDos;
console.log(resultadoComparacion);

resultadoComparacion = variableUno != variableDos;
console.log(resultadoComparacion);

variableUno = 34;
variableDos = 123;
// resultado false
resultadoComparacion = (variableUno > variableDos) && (variableUno > 0);


// variableDos = true

// relaciones lógicas
// AND(&&) y OR (||)
// C1 (v) && C2(v) && C2(f) => f
// C1 (f) || C2(f) || C2(f) => f