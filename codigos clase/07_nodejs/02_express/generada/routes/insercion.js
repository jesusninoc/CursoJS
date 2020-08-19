var express = require('express');
var router = express.Router();
var cliente = require('mongodb').MongoClient;

router.post('/', (req, res) => {
    console.log('Petición realida con exito');
});

module.exports = router;