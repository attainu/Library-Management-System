var express = require('express');
var router = express.Router();
const {authenticate}=require('../middlewares/authenticate')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'library Mangement system' });
});

module.exports = router;
