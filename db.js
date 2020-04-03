var mongoose = require('mongoose');
// mongodb connection

async function init() {
    try {
      var db =  await mongoose.connect('mongodb://localhost:27017/LibraryMangement', 
      { useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true });
        console.log('connected to mongodb');
    } catch (error) {
        console.log("error in mongodb connnection");
        console.log(error);
    }
}

init();








/*var mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Library", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(function() {
    console.log("Database connected successfully");
  })
  .catch(function(err) {
    console.log(err.message);
  });*/
