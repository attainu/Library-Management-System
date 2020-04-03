var mongoose = require('mongoose');
// mongodb connection

async function init() {
    try {
      var db =  await mongoose.connect('mongodb://localhost:27017/LibraryMangement', 
      { useNewUrlParser: true, 
        useUnifiedTopology: true });
        console.log('connected to mongodb');
    } catch (error) {
        console.log("error in mongodb connnection");
        console.log(error);
    }
}

init();