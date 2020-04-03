const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//CREATE ADMIN SCHEMA
const adminSchema = new Schema(
    {
       name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        unique: true,
        type: String,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        trim: true
      },
      address:{
          type:String,
          required:true,
          trim: true
      },
      phoneno:{
          type:Number,
          required:true,
          trim: true
      },
      date:{
        type:Date,
        default:Date.now
      },
      jwt:{
        type:String,
        required:false,
        default:null
      }
    }
     );
 const Admin = mongoose.model("admin", adminSchema);
  module.exports = Admin;

//DEFINE PRE METHOD TO HASH PASSWORD 
 /*adminSchema.pre('save', function (next) {
    var admin = this;
    if(admin.isModified('adminPassword')){
      bcrypt.hash(admin.adminPassword, 10)
    .then(function (hashedPassword) {
      console.log(hashedPassword);  
        admin.adminPassword = hashedPassword;
        next();

    })
    .catch((err)=>{
      next(err)
    })
    }
    else{
      next();
    }
    
  });
 
  userSchema.pre("save", function(next) {
    var user = this;
    // Check whether password field is modified
    if (user.isModified("password")) {
      bcrypt
        .hash(user.password, 10)
        .then(function(hashedPassword) {
          user.password = hashedPassword;
          next();
        })
        .catch(function(err) {
          next(err);
        });
    }
  });*/
  



