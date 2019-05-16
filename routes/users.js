var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');

let Emp_Users = require('../models/Emp_Users');
let Std_Users = require('../models/Std_Users');

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

/* Route for Creating Employer Profile */
router.post('/employers', (req, res) => {
  models.Emp_Users
  .findOrCreate({
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
  })
  .spread(function(result, created) {
    if (created) {
      res.redirect('/users/employers');
    } else {
      res.send('This User already exists!');
    }
  });
});

/* Route for Employer Job Posts */
router.get('/Emp_JobPosts', function (req, res, next) {
  models.Emp_JobPosts.findAll({}).then(Emp_JobPosts => {
    res.send(JSON.stringify(Emp_JobPosts));
  });
});

/* Route for Employer Job Posts By Id */
router.get('/Emp_JobPosts/:id', function (req, res) {
  let JobID = parseInt(req.params.id);
  models.Emp_JobPosts.findOne({
    where: {
      ID: JobID
    }
  }).then(Emp_JobPosts =>
    res.send(JSON.stringify(Emp_JobPosts)));
});

/* Route for Creating Employer Job Posts */
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

/* Route for Creating Student Profile */
router.post('/students', (req, res) => {
  models.Std_Users
  .findOrCreate({
    where: {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      StdEmail: req.body.StdEmail,
      StdContactNum: req.body.StdContactNum,
      // ResumeOnFile: req.body.ResumeOnFile,
      Major: req.body.Major,
      CoursesEnrolled: req.body.CoursesEnrolled,
      CoursesCompleted: req.body.CoursesCompleted,
      StdExperience: req.body.StdExperience,
      StdGPA: req.body.StdGPA,
      StdAwards: req.body.StdAwards,
      StdScholarships: req.body.StdScholarships,
      StdSkills: req.body.StdSkills,
      Username: req.body.Username,
      Password: req.body.Password
    }
  })
  .spread(function(result, created) {
    if (created) {
      res.redirect('/users/students');
    } else {
      res.send('This Student already exists!');
    }
  });
});

/* Student Job Posts Routes */
//router.get('/stuJobPosts', function (req, res, next) {
  //models.Std_JobPosts.findAll({}).then(stuJobPosts => {
    //res.send(JSON.stringify(stuJobPosts));
  //});
//});

/* Route for Student Job Posts by ID */
//router.get('/stuJobPosts/:id', function (req, res) {
  //let stuJobPostsId = parseInt(req.params.id);
  //models.Std_JobPosts.findOne({
    //where: {
      //Std_JobPosts: stuJobPostst.JobID
    //};
  //}).then(stuJobPosts =>
    //res.send(JSON.stringify(stuJobPosts)));
//});

/* Create student Job Posts */
//router.post('/stuJobPosts/sign-up', (req, res) => {
  //models.Std_Posts
  //.findOrCreate({
    //where: {
      //JobyName: req.body.JobName,
      //JobLocation: req.body.JobLocation,
      //JobWebsite: req.body.JobWebsite,
      //JobContactNum: req.body.JobcontactNum,
      //JobEmail: req.body.JobEmail,
      //JobDescription: req.body.JobDescription,
      //JobPostedDate: req.body.JobPostedDate,
      //JobCreatedById: req.body.JobCreatedById
    //}
  //})
  //.spread(function(result, created) {
    //if (created) {
      //res.send('Student Job Created Successfully!');
    //} else {
      //res.send('This job already exists!');
    //}
  //});
//});

module.exports = router;