var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');

const db = new sqlite.Database('./racket.sqlite3', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('You are connnected to Racket DB');
});

/* GET home page. */
// The code below has 0 errors but I think its becuase its not set to access the DB
// router.get('/employers', function(req, res, next) {

//   res.send(JSON.stringify(
//     models.employers
//   ));
// });

router.get('/employers', function(req, res, next) {
  models.Emp_Users.findAll({}).then(employerAsPlainObject => {
    const mappedEmployers = employerAsPlainObject.map(
      sequelizeModelForEmployer => ({
        ID: sequelizeModelForEmployer.ID,
        CompanyName: sequelizeModelForEmployer.CompanyName,
        CompanyWeb: sequelizeModelForEmployer.CompanyWeb,
        CompanyEmail: sequelizeModelForEmployer.CompanyEmail,
        CompanyContact: sequelizeModelForEmployer.CompanyContact,
        CompContactNum: sequelizeModelForEmployer.CompContactNum,
        Username: sequelizeModelForEmployer.Username,
        Password: sequelizeModelForEmployer.Password
    })
    );
    res.send(JSON.stringify(mappedEmployers));
  });
});



module.exports = router;
