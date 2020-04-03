const Admin=require('../models/admin');
const jwt=require('jsonwebtoken');
module.exports={ async authenticate(req,res,next){
    
        const token=req.header('Authorization');
        console.log(token)
        if(!token) return res.status(401).send('Access Denied');
        try{
        const verified=await jwt.verify(token,process.env.SECRET_KEY);
        console.log(verified.id);
        if(!verified.id) return res.status(403).send("not a vierified user");
        const admin=await Admin.findOne({_id:verified.id,jwt:token})
        console.log("above admin");
        console.log(admin);
        if(!admin)
        {
            return res.status(401).send("no admin found with this authorization");
        }
        else{
            req.admin=admin;
            console.log(req.admin);
            next();
        }
       
      }
    catch(err)
    {
        return res.send(err);
    }
}//,
//async 
}
