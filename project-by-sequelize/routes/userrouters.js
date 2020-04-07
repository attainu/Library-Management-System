const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
var userController = require('../controllers/userController');

router.post('/',  userController.createUser)
router.delete('/:id',  userController.deleteUser)
router.put('/:id',  userController.updateUser)

router.get('/',  userController.getAllUser)
router.get('/:id',  userController.getUser)

module.exports = router;