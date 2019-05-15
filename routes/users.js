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

/* Employer Routes */ 
router.get('/employers', function (req, res, next) {
  models.Emp_Users.findAll({}).then(employers => {
    res.send(JSON.stringify(employers));
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


/*  emp_jobposts Routes */
router.get('/Emp_JobPosts', function (req, res, next) {
  models.Emp_JobPosts.findAll({}).then(Emp_JobPosts => {
    res.send(JSON.stringify(Emp_JobPosts));
  });
});

/* Route for Emp_JopPost by ID */
router.get('/Emp_JobPosts/:id', function (req, res) {
  let JobID = parseInt(req.params.id);
  models.Emp_JobPosts.findOne({
    where: {
      ID: JobID
    }
  }).then(Emp_JobPosts =>
    res.send(JSON.stringify(Emp_JobPosts)));
});

/* Route for Emp posting Jobs */
router.post('/Emp_JobPosts', (req, res) => {
  models.Emp_JobPosts
    .findOrCreate({
      where: {
        JobName: req.body.jobName,
          JobLocation: req.body.jobLocation,
          JobWebsite: req.body.jobWebsite,
          JobContactNum: req.body.jobContactNum,
          JobEmail: req.body.jobEmail,
          JobDescription: req.body.jobDescription,
          JobPostedDate: req.body.jobPostedDate,
          JobCreatedById: req.body.jobCreatedById,
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('/Emp_JobPosts');
      } else {
        res.send('This Job already exists!');
      }
    });
});

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

/* Student Routes */ 
router.get('/students', function (req, res, next) {
  models.Std_Users.findAll({}).then(students => {
    res.send(JSON.stringify(students));
  });
});

/* Route for Student Profile by ID */
router.get('/students/:id', function(req, res) {
  let studentId = parseInt(req.params.id);
  models.Std_Users.findOne({
    where: {
      StudentID: studentId
    }
  }).then(student =>
  res.send(JSON.stringify(student)));
});

module.exports = router;