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


router.get('/employers', function (req, res, next) {
  models.Emp_Users.findAll({}).then(employersAsPlainObject => {
    const mappedEmployers = employersAsPlainObject.map(
      sequelizeModelForEmployers => ({
        ID: sequelizeModelForEmployers.ID,
        CompanyName: sequelizeModelForEmployers.CompanyName,
        CompanyWeb: sequelizeModelForEmployers.CompanyWeb,
        CompanyEmail: sequelizeModelForEmployers.CompanyEmail,
        CompanyContact: sequelizeModelForEmployers.CompanyContact,
        CompContactNum: sequelizeModelForEmployers.CompContactNum,
        Username: sequelizeModelForEmployers.Username,
        Password: sequelizeModelForEmployers.Password
      })
    );
    res.send(JSON.stringify(mappedEmployers));
  });
});

// router.get('/employers/:id', (req, res) => {
//   let employerId = parseInt(req.params.ID);
//   models.Emp_Users.findAll({
//     where: {
//       ID: 'ID'
//     }
//   }).then(employersAsPlainObject => {
//     const mappedEmployers = employersAsPlainObject.map(
//       sequelizeModelForEmployers => ({
//         ID: sequelizeModelForEmployers.ID,
//         CompanyName: sequelizeModelForEmployers.CompanyName,
//         CompanyWeb: sequelizeModelForEmployers.CompanyWeb,
//         CompanyEmail: sequelizeModelForEmployers.CompanyEmail,
//         CompanyContact: sequelizeModelForEmployers.CompanyContact,
//         CompContactNum: sequelizeModelForEmployers.CompContactNum,
//         Username: sequelizeModelForEmployers.Username,
//         Password: sequelizeModelForEmployers.Password
//       })
//     );
//     res.send(JSON.stringify(mappedEmployers));
//   });
// });

module.exports = router;
