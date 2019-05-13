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
router.get('/employers/:id', function (req, res) {
  let employerId = parseInt(req.params.id);
  models.Emp_Users.findOne({
    where: {
      ID: employerId
    }
  }).then(employer =>
    res.send(JSON.stringify(employer)));
});

/* Create Employer Profile */
router.post('/employers/sign-up', (req, res) => {
  models.Emp_Users.findOrCreate({
    where: {
      CompanyName: req.body.CompanyName,
      CompanyWeb: req.body.CompanyWeb,
      CompanyEmail: req.body.CompanyEmail,
      CompanyContact: req.body.CompanyContact,
      CompContactNum: req.body.CompContactNum,
      CompIndustry: req.body.CompIndustry,
      Username: req.body.Username,
      Password: req.body.Password
    }
  }).spread(function(EmpSignUp, created) {
    if (created) {
      res.redirect('/employers/:id');
    } else {
      res.send(JSON.stringify(EmpSignUp));
    }
  });
});

/* Student Routes */
router.get('/students', function (req, res, next) {
  models.Std_Users.findAll({}).then(students => {
    res.send(JSON.stringify(students));
  });
});

/* Route for Student Profile by ID */
router.get('/students/:id', function (req, res) {
  let studentId = parseInt(req.params.id);
  models.Std_Users.findOne({
    where: {
      StudentID: studentId
    }
  }).then(student =>
    res.send(JSON.stringify(student)));
});

module.exports = router;