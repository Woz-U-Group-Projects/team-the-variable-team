var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');


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
    .spread(function (result, created) {
      if (created) {
        res.redirect('/users/employers');
      } else {
        res.send('This User already exists!');
      }
    });
});

/* Route for Employer Job Posts */
router.get('/empjobposts', function (req, res, next) {
  models.Emp_JobPosts.findAll({}).then(empJobPosts => {
    res.send(JSON.stringify(empJobPosts));
  });
});

/* Route for Employer Job Posts By Id */
router.get('/empjobposts/:id', function (req, res) {
  let empJobId = parseInt(req.params.id);
  models.Emp_JobPosts.findOne({
    where: {
      EmpJobID: empJobId
    }
  }).then(empJobPost =>
    res.send(JSON.stringify(empJobPost)));
});

/* Route for Creating Employer Job Posts */
router.post('/empjobposts', (req, res) => {
  models.Emp_JobPosts
    .findOrCreate({
      where: {
        EmpJobName: req.body.JobName,
        EmpJobLocation: req.body.JobLocation,
        EmpJobWebsite: req.body.JobWebsite,
        EmpJobContactNum: req.body.JobContactNum,
        EmpJobEmail: req.body.JobEmail,
        EmpJobDescription: req.body.JobDescription,
        EmpJobPostedDate: req.body.JobPostedDate,
        EmpJobCreatedById: req.body.JobCreatedById,
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('/users/empjobposts');
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
    .spread(function (result, created) {
      if (created) {
        res.redirect('/users/students');
      } else {
        res.send('This Student already exists!');
      }
    });
});

/* Route for Student Job Posts */
router.get('/stdjobposts', function (req, res, next) {
  models.Std_JobPosts.findAll({}).then(stuJobPosts => {
    res.send(JSON.stringify(stuJobPosts));
  });
});

/* Route for Student Job Posts by ID */
router.get('/stdjobposts/:id', function (req, res) {
  let stdJobId = parseInt(req.params.id);
  models.Std_JobPosts.findOne({
    where: {
      StdJobID: stdJobId
    }
  }).then(stdJobPost =>
    res.send(JSON.stringify(stdJobPost)));
});

/* Route for Creating Student Job Posts */
router.post('/stdjobposts', (req, res) => {
  models.Std_JobPosts
    .findOrCreate({
      where: {
        StdJobName: req.body.JobName,
        StdJobLocation: req.body.JobLocation,
        StdJobWebsite: req.body.JobWebsite,
        StdJobContactNum: req.body.JobContactNum,
        StdJobEmail: req.body.JobEmail,
        StdJobDescription: req.body.JobDescription,
        StdJobPostedDate: req.body.JobPostedDate,
        StdJobCreatedById: req.body.JobCreatedById
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('/users/stdjobposts');
      } else {
        res.send('This job already exists!');
      }
    });
});

module.exports = router;