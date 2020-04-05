var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var logSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user"
           },
         bookId: {
            type: Schema.Types.ObjectId,
            ref: "Book"
              },
         returnStatus:{
            type:Boolean,
            required:true
             },
      issueDate:{
        type:Date,
        default:Date.now
      }
    }
     );


/* var logSchema = new Schema(
      {
          user: {
          type:Schema.Types.ObjectId,
          required: true,
            },
        book: {
          type: Schema.Types.ObjectId,
          required: true,
             },
        returnStatus:{
            type:Boolean,
            required:true
            },
        date:{
          type:Date,
          default:Date.now
        }
      }
       );*/
  
  
const Log = mongoose.model("log", logSchema);
module.exports = Log;

