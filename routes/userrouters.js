const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');
/* GET users listing. */
router.get('/', UserController.getAllUsers);
//get user detail by id.
router.get('/:id', UserController.getUser);
//create a new user.
router.post('/', UserController.createUser);
//update user by id.
router.put('/',UserController.updateUser);
//delete user by id.
router.delete('/:id', UserController.deleteUser);

module.exports = router;
