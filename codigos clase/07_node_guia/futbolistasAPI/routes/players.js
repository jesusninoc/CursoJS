const express = require('express');
const router = express.Router();
const controlador = require('../controllers/playerController');

router.get('/', controlador.base);
router.post('/add', controlador.add);
router.delete('/delete/:id', controlador.remove);
router.get('/findAll', controlador.findAll);


module.exports = router