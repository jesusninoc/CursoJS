var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.post('/',(res,req)=>{});
router.put('/',(res,req)=>{});
router.delete('/',(res,req)=>{});
router.all('/all',(res,req)=>{});*/



module.exports = router;
