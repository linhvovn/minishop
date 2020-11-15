var express = require('express');
var router = express.Router();
var obj = {name: 'user'}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(obj);
});

module.exports = router;