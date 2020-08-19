const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/futbolapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('conexion realizada con éxito'); })
    .catch(console.log('error en la conexion'));