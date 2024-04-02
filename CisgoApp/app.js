var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders'); // Import orders.js module
var adminPendingRouter = require('./routes/adminTablePendingRoute'); // Import adminTablePendingRoute.js module
var adminApprovedRouter = require('./routes/adminTableApprovedRoute'); // Import adminTablePendingRoute.js module
var adminEditRouter = require('./routes/adminTableEditRoute'); // Import adminTableEditRoute.js module
var adminStatusRouter = require('./routes/adminTableAdminStatusRoute'); // Import adminTableAdminStatusRoute.js module
var formSubmitRouter = require('./routes/formSubmitRoute'); // Import formSubmitRoute.js module
var pointData = require('./routes/pointData');
var adminRouter = require('./routes/html/admin');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter); // Use orders.js to handle requests to /orders
app.use('/adminTablePendingRoute', adminPendingRouter); // Use adminTablePendingRoute.js to handle requests to /adminTablePendingRoute
app.use('/adminTableApprovedRoute', adminApprovedRouter); // Use adminTableApprovedRoute.js to handle requests to /adminTableApprovedRoute
app.use('/adminTableEditRoute', adminEditRouter); // Use adminTableEditRoute.js to handle requests to /adminTableEditRoute
app.use('/adminTableAdminStatusRoute', adminStatusRouter); // Use adminTableAdminStatusRoute.js to handle requests to /adminTableAdminStatusRoute
app.use('/formSubmitRoute', formSubmitRouter); // Use formSubmitRoute.js to handle requests to /formSubmitRoute

app.use('/pointSeries', pointData);
app.use('/admin', adminRouter);


// session management
// TODO: change to be randomized at runtime
/* const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
})); */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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

module.exports = app;
