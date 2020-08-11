let express = require('express');
let routes = express.Router();

// captura de parámetros por paramentro
routes.get('/:id', (req, res, next) => {
    console.log('peticion realizada');
    res.send(`recurso pedido con id ${req.params.id}`);
});

/*routes.get('/:id?', (req, res, next) => {
    console.log('peticion realizada');
    res.send(`recurso pedido con id ${req.params.id}`);
});*/

// captura de parámetros por string query
routes.get('/',(req,res,next)=>{
    console.log('peticion realizada');
    res.send(`recurso pedido con id ${req.query.id}`);
})

// captura de parámetros por body
routes.get('/',(req,res,next)=>{
    console.log('peticion realizada');
    res.send(`recurso pedido con id ${req.body.id}`);
})


module.exports = routes;
