var express = require('express');
var router = express.Router();

/* GET Information about my data. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sahil Grewal' });
});

module.exports = router;
