var express = require('express');
var router = express.Router();
var path = require('path');
const { authenticate } = require('../middlewares/authenticate')

const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require("../controllers/bookController");
//get book list.
router.get('/', authenticate, getAllBooks);
//get book detail by id.
router.get('/:id', authenticate, getBook);
//post a new book.
router.post('/', authenticate, createBook);
//update book by id
router.put('/', authenticate, updateBook);
//delete book by id
router.delete('/:id', authenticate, deleteBook);


module.exports = router;

