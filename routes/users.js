var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');
var Emp_Users = require('../models/Emp_Users');

const db = new sqlite.Database('./racket.sqlite3', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('You are connnected to Racket DB');
});

/* Employer Routes */ 
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
        CompIndustry: sequelizeModelForEmployers.CompIndustry,
        Username: sequelizeModelForEmployers.Username,
        Password: sequelizeModelForEmployers.Password
      })
    );
    res.send(JSON.stringify(mappedEmployers));
  });
});

/* Route for Employer Profile by ID */
router.get('/employers/:id', function(req, res) {
  let employerId = parseInt(req.params.id);
  models.Emp_Users.findOne({
    where: {
      ID: employerId
    }
  }).then(employer =>
  res.send(JSON.stringify(employer)));
});

// router.get('/employers/:id', function (req, res, next) {
//   models.Emp_Users.findOne({ id: req.body.ID }).then(
//       sequelizeModelForEmployer => ({
//         ID: sequelizeModelForEmployer.ID,
//         CompanyName: sequelizeModelForEmployer.CompanyName,
//         CompanyWeb: sequelizeModelForEmployer.CompanyWeb,
//         CompanyEmail: sequelizeModelForEmployer.CompanyEmail,
//         CompanyContact: sequelizeModelForEmployer.CompanyContact,
//         CompContactNum: sequelizeModelForEmployer.CompContactNum,
//         CompIndustry: sequelizeModelForEmployer.CompIndustry,
//         Username: sequelizeModelForEmployer.Username,
//         Password: sequelizeModelForEmployer.Password
//       })
//   );
//     res.send(JSON.stringify(sequelizeModelForEmployer));
//   });


/* Create Employer Profile */
// router.post('/', function(req, res, next) {
//   console.log(req.body);
//   EmpSignUp.create(
//       {
//           sku: req.body.sku,
//           asin: req.body.asin,
//           department: req.body.department,
//           type: req.body.type,
//           brand: req.body.brand,
//           model: req.body.model,
//           size: req.body.size,
//           width: req.body.width,
//           color: req.body.color,
//           shipWeight: req.body.shipWeight,
//           shipWidth: req.body.shipWidth,
//           shipHeight: req.body.shipHeight,
//           shipDepth: req.body.shipDepth,
//           priceList: req.body.priceList,
//           priceRetail: req.body.priceRetail,
//           priceSavings: req.body.priceSavings,
//           percentSavings: req.body.percentSavings,
//           priceWholesale: req.body.priceWholesale
//       },
//       function(err, result) {
//           if (err) {
//               console.log(err);
//           } else {
//               res.json("Profile successfully created");
//           }
//       }
//   );
// });

module.exports = router;
