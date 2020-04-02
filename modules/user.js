var mongoose = require('mongoose');
//schema for user(student)
var Schema = mongoose.Schema
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },

    password: {
        type: String,
        trim: true,
        required: true
    },
    book:
    {
        type: Schema.Types.ObjectId,
        ref: "Book"
    },
    joined : {type: Date, default: Date.now()},
    bookIssueInfo : [{
        book_info : {
           id : {
              type : mongoose.Schema.Types.ObjectId,
              ref : "Issue",
           }, 
        },
     }],
     gender : String,

},
    { timestamps: true }
);

var User = mongoose.model('user', UserSchema);

module.exports = User;