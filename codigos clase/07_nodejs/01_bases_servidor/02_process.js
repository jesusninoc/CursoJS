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