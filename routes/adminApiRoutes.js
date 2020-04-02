const express  = require('express');
const router = express.Router();
const {authenticate}=require('../middlewares/authenticate')
const {adminRegister,adminLogin,adminUpdate,adminLogout,allAdmins,specificAdmin,deleteAdmin} = require('../controllers/adminApiController');

router.post('/admin/register', adminRegister);
router.post('/admin/login',adminLogin);
router.patch('/admin/:adminId',authenticate,adminUpdate)
router.delete('/admin/logout',authenticate,adminLogout);
router.get('/admin/all',authenticate,allAdmins);
router.get('/admin/:adminId',authenticate,specificAdmin);
router.delete('/admin/:adminId',authenticate,deleteAdmin);


module.exports = router;


/*
router.post('/adminregister', adminRegister);
router.post('/adminlogin',adminLogin);
router.patch('/allAdmins/:adminId',authenticate,adminUpdate)
router.delete('/adminlogout',authenticate,adminLogout);
router.get('/allAdmins',authenticate,allAdmins);
router.get('/allAdmins/:adminId',authenticate,specificAdmin);
router.delete('/allAdmins/:adminId',authenticate,deleteAdmin);


*/