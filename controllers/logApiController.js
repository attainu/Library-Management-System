const bcrypt = require('bcryptjs');
const Log=require('../models/liblog');
const logApiController={};

//ADD NEW RECORD INTO LOG BOOK
logApiController.addToLog=async (req,res)=>{
    try{
      const newlog = await new Log(req.body).save()
      res.json(newlog);
       }
     catch(err)  {
        res.json({message:err});
     }
};

//UPDATE THE LOG BASED ON RETURN STATUS.CAN ONLY UPDATE RETURN STATUS
logApiController.updateLog= async (req, res) => {
    
   try{
    console.log(req.params.logId);
     const updatedLog=await Log.updateOne({_id:req.params.logId},
       {$set:{returnStatus: req.body.returnStatus}});
        res.json(updatedLog);
  }
catch(err)  {
   res.json({message:err});
}
};


//GET BACK SPECIFIC LOG BASED ON ID 
logApiController.specificLog= async (req, res) => {
    
   try{
   console.log(req.params.logId);
   const specificLog=await Log.findOne({_id:req.params.logId});
     res.json(specificLog);
  }
catch(err)  {
   res.json({message:err});
}
};

//DELETE THE LOG BASED ON THE ID
logApiController.deleteLog= async (req, res) => {
    
    try{
      console.log(req.params.logId);
      const removedLog=await Log.remove({_id:req.params.logId});
      res.json(removedLog);
    }
   catch(err)  {
      res.json({message:err});
       }
  };
  
  logApiController.all= async (req, res) => {
    try{
      const logs= await Log.find({});
      res.json(logs);
   }
 catch(err)  {
    res.json({message:err});
  }};
  



module.exports = logApiController;
