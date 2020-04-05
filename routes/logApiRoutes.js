const express  = require('express');
const router = express.Router();
const {addToLog,updateLog,deleteLog,specificLog} = require('../controllers/logApiController');
const {authenticate}=require('../middlewares/authenticate');

router.post('/addToLog',authenticate, addToLog);
//router.patch('/:logId', authenticate,updateLog);
/*router.delete('/:logId',deleteLog);*/
//router.get('/:logId',authenticate,specificLog);
//router.post('/addToLog',addToLog);
router.delete('/:logId',authenticate, deleteLog);
router.patch('/:logId',authenticate, updateLog);
//router.delete('/:logId',authenticate,deleteLog);
router.get('/:logId',authenticate,specificLog);
module.exports = router;
