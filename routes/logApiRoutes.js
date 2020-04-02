const express  = require('express');
const router = express.Router();
const {addToLog,updateLog,deleteLog,specificLog} = require('../controllers/logApiController');
const {authenticate}=require('../middlewares/authenticate');

router.post('/logs/addToLog',authenticate, addToLog);
//router.patch('/logs/:logId', authenticate,updateLog);
/*router.delete('/logs/:logId',deleteLog);*/
//router.get('/logs/:logId',authenticate,specificLog);
//router.post('/logs/addToLog',addToLog);
router.delete('/logs/:logId',authenticate, deleteLog);
router.patch('/logs/:logId',authenticate, updateLog);
//router.delete('/logs/:logId',authenticate,deleteLog);
router.get('/logs/:logId',authenticate,specificLog);
module.exports = router;
