const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
var bookController = require('../controllers/bookController');

router.post('/',  bookController.createBook)
router.delete('/:id',  bookController.deleteBook)
router.put('/:id',  bookController.updateBook)

router.get('/',  bookController.getAllBook)
router.get('/:id',  bookController.getBook)

module.exports = router;