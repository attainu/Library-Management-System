 require('./models/sequelize');

const express = require('express')
const bodyParser = require('body-parser')
var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var expressValidator = require('express-validator');

var indexRouter = require('./routes/indexrouters');
//var usersRouter = require('./routes/userrouters');
var bookRouter = require('./routes/bookroutes');
var userRouter = require('./routes/userrouters');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

 app.use('/', indexRouter);
 //app.use('/users', usersRouter);
 app.use('/books', bookRouter);
 app.use('/users', userRouter);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// API ENDPOINTS

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})