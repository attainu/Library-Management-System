const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');
const jwt=require("jsonwebtoken");

const adminApiController = {};


//ADMIN REGISTRATION
adminApiController.adminRegister= async (req, res) => {
     try {
        //CHECK IF INPUT FILEDS OR EMPTY
        if(!req.body.name||!req.body.email||!req.body.password||!req.body.address||!req.body.phoneno)
          {
              return res.status(400).send("Message:user details field cannot be empty");
          }
         //HASH THE PASSWORD 
        req.body.password = await bcrypt.hash(req.body.password, 10);
        var admin = await new Admin(req.body).save();
        res.status(201).json({ "Message": "Admin created","adminDetails":admin});
        } catch (error) {
            res.status(400).json(error);
        }
   };

//  ADMIN LOGIN ROUTE
adminApiController.adminLogin = async(req, res)=> {
     try{
        const email=req.body.email;
        const password=req.body.password;
        //CHECK IF EMAIL OR PASSWORD IS EMPTY 
        if(!email||!password) return res.status(400).send("Message:email or password cannot be null");  
        const admin=await Admin.findOne({email:email});
        const isMatched=await bcrypt.compare(password,admin.password);
        if (!isMatched) return res.status(404).send("Message:Invalid Email/Password Credentials");
        const token=await jwt.sign({id:admin.id},process.env.SECRET_KEY,{expiresIn:1000*60*60*4});
        admin.jwt=token;
        const savedadmin=await admin.save();
        return res.status(200).json({"Status":"successful login","jwttoken":token});        
       }
    catch (error)
      {
        res.status(400).json(error);
      }};

//  ADMIN LOGOUT ROUTE
adminApiController.adminLogout = async(req, res)=> {
  try{
       await Admin.findOneAndUpdate({_id:req.admin.id},{jwt:null})
       return res.status(200).send("status:Successfully logged out" );
     }
    catch (error) {
        res.status(400).json(error);
         }
    };
//GET BACK ALL ADMINS WHICH HELPS TO LOGIN
adminApiController.allAdmins= async (req, res) => {
 
try{
    const admins= await Admin.find({});
    res.json(admins);
   }
 catch(err)  {
    res.json({message:err});
 }};

 //UPDATE ADMIN USING PATCH 
 adminApiController.adminUpdate= async (req, res) => {
     try{
        const updatedAdmin=await Admin.updateOne(
        {_id:req.params.adminId},
        {$set:{name:req.body.name,address:req.body.address,phoneno:req.body.phoneno}});
        res.json(updatedAdmin);
   }
 catch(err)  {
    res.json({message:err});
 }
};

// DELETE THE SPECIFIC ADMIN 
adminApiController.deleteAdmin= async (req, res) => {
    console.log(req.params.adminId);
    try{
    const removedAdmin=await Admin.remove({_id:req.params.adminId});
    res.json(removedAdmin);
   }
 catch(err)  {
   res.json({message:err});
 }
};



 //GET BACK SPECIFIC ADMIN
 adminApiController.specificAdmin= async (req, res) => {
    console.log(req.params.adminId);
    
 try{
    
    const admin=await Admin.findById(req.params.adminId);
    console.log(admin);
    res.json(admin);
   }
 catch(err)  {
    res.json({message:err});
 }
};




module.exports = adminApiController;










/*adminApiController.adminRegister= function (req, res) {
 var admin = new Admin({
    adminName: req.body.name,
    adminEmailId: req.body.email,
    adminPassword: req.body.password,
    adminAddress:req.body.address,
    adminPhoneNo:req.body.phoneno
})
 // pre middleware
admin.save()
.then(function (admin) {
    return res.json({"status":"admin registration successful","code":"201"});
})
.catch(function (err) {
    res.send(err.message);
})
}*/




/*adminApiController.adminLogin = async(req, res)=> {
    const email=req.body.email;
    console.log(email);
    const password=req.body.password;
    console.log(password);
    try{
        const admin=await Admin.findOne({adminEmailId : email})  
        console.log(admin);
        const isMatched=await bcrypt.compare(password, admin.adminPassword)
        console.log(isMatched);
         if (!isMatched) return res.send("invalid credentials");
        const token=await jwt.sign({_id:admin._id},"Library",{expiresIn:1000*60*60});
        console.log(token);
        admin.token=token;
        console.log(admin);
        admin.save();
         return res.json({"jwttoken":token,"status":"successful login","code":"202"});        
    }
    
    catch (err)
     {
        console.log(err.message);
        res.send(err.message);
    }};*/








   /* try{
        const admin = await new Admin({
         adminName: req.body.name,
         adminEmailId: req.body.email,
         adminPassword: req.body.password,
         adminAddress:req.body.address,
         adminPhoneNo:req.body.phoneno
        }).save();
        console.log(admin)
        //const registeredAdmin= await admin.save();
        res.status(200).json(admin);
       }
     catch(err)  {
        res.status(400).send(err);
     }*/