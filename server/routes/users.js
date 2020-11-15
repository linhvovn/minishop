var express = require('express');
var router = express.Router();
var mainDb = require('../database.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sql = "select * from hinhthucthanhtoan"
    var params = []
    mainDb.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

module.exports = router;
