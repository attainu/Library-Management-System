var express = require('express');
var router = express.Router();


var orderController = require('./controllers/orderController');


router.post("/:Id",orderController.IssueBook)
router.post("/:Id",orderrender.returnBook)

module.exports = router;


