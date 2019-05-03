var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();
var sqlite3 = require('sqlite3').verbose();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

let db = new sqlite3.Database('racket.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('Connected to the Racket Database.');
});
db.serialize(() => {
    db.each(`SELECT CompanyID as id, CompanyName as name FROM employers`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
    });
});
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the Database Connection.');
});
// models.sequelize.sync().then(function() {
//     console.log("DB Sync'd up");
// });

module.exports = app;
