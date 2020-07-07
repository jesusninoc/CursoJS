'use script'
console.log('hola mundo con nodejs');
//var argumentos = process.argv.slice();
argumentos = process.argv.slice(2);
console.log(argumentos);
console.log(argumentos[0]);