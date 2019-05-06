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

// router.post('/employers', (req, res) => {
//   models.employers
//   .findOrCreate({
//     where: {
//       UserName: req.body.UserName
//     }
//   })
//   .spread(function(result, created) {
//     if (created) {
//       res.redirect('/employers');
//     } else {
//       res.send('This Username already exists!');
//     }
//   });
// });
/* GET home page. */

// The code below has 0 errors but I think its becuase its not set to access the DB
router.get('/employers', function(req, res, next) {

  res.send(JSON.stringify(
    models.employers
  ));
});

// This code returns a wierd error of date.includes is not a function
// router.get('/employers', function(req, res, next) {
//   models.employers.findAll({}).then(employerAsPlainObject => {
//     const mappedEmployers = employerAsPlainObject.map(employers => ({
//       CompanyID: employers.CompanyID,
//       UserName: employers.UserName,
//       PassWord: employers.PassWord
//     }));
//     res.send(JSON.stringify(mappedEmployers));
//   });
// });



module.exports = router;
