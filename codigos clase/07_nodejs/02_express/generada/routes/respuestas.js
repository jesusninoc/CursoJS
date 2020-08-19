let express = require('express');
let router = express.Router();

router.get('/envio', (req, res, next) => {
    //res.send('<h1>Respuesta enviada</h1>');
    res.send({ nombre: 'Borja', apellido: 'Martin', curso: 3 });
});

router.get('/json', (req, res, next) => {
    res.json({ nombre: 'Borja', apellido: 'Martin', curso: 3 });
});


router.get('/redireccion', (req, res, next) => {
    res.redirect('/foo/bar');
    res.redirect('http://example.com');
    res.redirect(301, 'http://example.com');
    res.redirect('http://example.com', 301);
    res.redirect('../login'); // /blog/post/1 -> 
});

router.get('/renderiza/:id?', (req, res, next) => {
    if (req.query.id != 'undefined'){
        res.render('vista_ejemplo_datos',{id: req.query.id});
    } else {
        res.render('vista_ejemplo');
    }
});
router.get('/descarga', (req, res, next) => {
    res.download('./files/ejemplos.txt', (error) => {
        console.log('se ha producido un error');
        res.send('El archivo no se encuentra')
    });

});

module.exports = router;