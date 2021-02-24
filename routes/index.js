var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('hoops_web_viewer_sample', { title: 'Express' });
  res.render('index', { title: 'Express' });
});

module.exports = router;
