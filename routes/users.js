var express = require('express');
const { propfind } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor++;
  product = product*factor;
  res.send(`Product is ${product}`);
});

var product = 1;
var factor = 1;

module.exports = router;
