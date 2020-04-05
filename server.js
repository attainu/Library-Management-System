const express = require("express");
var createError = require('http-errors');
const path = require("path");
const methodOverride = require("method-override");
const fetch = require("node-fetch");
const bodyParser=require("body-parser");
var dotenv = require("dotenv");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');

dotenv.config();
require('./db');
const app = express();
const adminApiRoutes = require('./routes/adminApiRoutes');
const logApiRoutes=require('./routes/logApiRoutes');
var indexRouter = require('./routes/indexrouters');
var usersRouter = require('./routes/userrouters');
var bookRouter = require('./routes/bookroutes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', bookRouter);
app.use('/log',logApiRoutes);
app.use('/admin',adminApiRoutes);

//BODY PARSER
app.use(bodyParser.json());

//HOME ROUTE
app.get("/", (req,res)=>{
    res.send("Message:Welcome To Library Management System");
});

// catch 404 and forward to error handler
app.use((req, res, next)=> {
    next(createError(404));
  });

 // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
 // render the error page
    res.status(err.status || 500);
    res.render('error');
  }); 

//SERVER LISTENING ON 
const PORT = process.env.PORT || 4444
app.listen(PORT,  ()=> {
    console.log("Server running on port:",PORT);
});
















/*app.use('/', (req,res) => {
    const admins = fetch('http://localhost:4444/Library')
    .then(function (admins) {
        return admins.json();
    })
    .then(function (admins) {
        res.send(admins);
    })
});*/