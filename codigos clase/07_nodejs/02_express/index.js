'use strict'

let express = require('express');
let app = express();

app.get('/',(req,res)=>{
    console.log('petición realizada');
    res.send('petición realizada');
});

let server = app.listen(3000,()=>{
    console.log('servidor abierto');
})