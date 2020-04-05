var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var logSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
           },
         bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
              },
         returnStatus:{
            type:Boolean,
            required:true,
            default:false
             },
      issueDate:{
        type:Date,
        default:Date.now
      }
    }
     ); 
  
const Log = mongoose.model("log", logSchema);
module.exports = Log;

