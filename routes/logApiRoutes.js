const express  = require('express');
const router = express.Router();
const {addToLog,updateLog,deleteLog,specificLog} = require('../controllers/logApiController');
const {authenticate}=require('../middlewares/authenticate');

//ALL CRUD ROUTES RELATED TO lOG
router.post('/addToLog',authenticate, addToLog);
router.get('/:logId',authenticate,specificLog);
//router.get('/alllogs',authenticate,allLogs);
router.patch('/:logId',authenticate, updateLog);
router.delete('/:logId',authenticate, deleteLog);
module.exports = router;
