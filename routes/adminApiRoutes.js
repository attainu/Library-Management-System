const express  = require('express');
const router = express.Router();
const {authenticate}=require('../middlewares/authenticate')
const {adminRegister,adminLogin,adminUpdate,adminLogout,allAdmins,specificAdmin,deleteAdmin} = require('../controllers/adminApiController');

//ALL CRUD ROUTES RELATED TO ADMIN
router.post('/register', adminRegister);
router.post('/login',adminLogin);
router.patch('/:adminId',authenticate,adminUpdate)
router.delete('/logout',authenticate,adminLogout);
router.get('/alladmins',authenticate,allAdmins);
router.get('/:adminId',authenticate,specificAdmin);
router.delete('/:adminId',authenticate,deleteAdmin);


module.exports = router;










/*
router.post('/admin/register', adminRegister);
router.post('/adminlogin',adminLogin);
router.patch('/allAdmins/:adminId',authenticate,adminUpdate)
router.delete('/adminlogout',authenticate,adminLogout);
router.get('/allAdmins',authenticate,allAdmins);
router.get('/allAdmins/:adminId',authenticate,specificAdmin);
router.delete('/allAdmins/:adminId',authenticate,deleteAdmin);


*/