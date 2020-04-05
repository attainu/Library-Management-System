const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');
const Log=require('../models/liblog');
const logApiController={};

logApiController.addToLog=async (req,res)=>{
    console.log(req.body.userId);
    console.log(req.body.bookId);
    console.log(req.body.returnStatus);
    const newlog = new Log({
        userId: req.body.userId,
        bookId: req.body.bookId,
        returnStatus: req.body.returnStatus,
    });
    try{
        console.log("in side try");
        const addedLog= await newlog.save();
        console.log(addedLog);
        res.json(addedLog);
       }
     catch(err)  {
        res.json({message:err});
     }
};

logApiController.updateLog= async (req, res) => {
    console.log(req.params.logId);
   try{
   const updatedLog=await Log.updateOne(
       {_id:req.params.logId},
       {$set:{returnStatus: req.body.returnStatus}});
        res.json(updatedLog);
  }
catch(err)  {
   res.json({message:err});
}
};



logApiController.specificLog= async (req, res) => {
    console.log(req.params.logId);
   try{
   const specificLog=await Log.find({});
     res.json(specificLog);
  }
catch(err)  {
   res.json({message:err});
}
};


logApiController.deleteLog= async (req, res) => {
    console.log(req.params.logId);
    try{
      const removedLog=await Log.remove({_id:req.params.logId});
      res.json(removedLog);
    }
   catch(err)  {
      res.json({message:err});
       }
  };
  







module.exports = logApiController;
