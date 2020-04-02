var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');
//get book list.
router.get('/', bookController.getAllBooks);
//get book detail by id.
router.get('/:id', bookController.getBook);
//post a new book.
router.post('/', bookController.createBook);
//update book by id
router.put('/',bookController.updateBook);
//delete book by id
router.delete('/:id', bookController.deleteBook);


module.exports = router;

