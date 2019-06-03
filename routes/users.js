var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var passport = require('passport')

/* Employer Routes */
router.get('/employers', function (req, res, next) {
  var expand = req.query.expand;
  var findAll = {};
  if (expand == 'jobpoststotal') {
    findAll['include'] = [
      { model: models.Emp_JobPosts, as: 'jobPosts' },
    ];
  }
  models.Emp_Users.findAll(findAll).then(employers => {
    res.send(JSON.stringify(employers));
  });
});

router.get('/employerssearch/:industry', function (req, res) {
  models.Emp_Users.findAll({
    where: {
      CompIndustry: {
        [Op.like]: '%' + req.params.industry + '%'
      }
    }
  }).then(student =>
    res.send(JSON.stringify(student)));
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
        Password: req.body.Password,
        avatar: req.body.avatar ? req.body.avatar : null
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

/* Route for Employer Job Posts Update */
router.put('/empjobpostsupdate/:id', function (req, res, next) {
  let empJobId = parseInt(req.params.id);
  models.Emp_JobPosts.update(
    {
      EmpJobName: req.body.JobName,
      EmpJobLocation: req.body.JobLocation,
      EmpJobWebsite: req.body.JobWebsite,
      EmpJobContactNum: req.body.JobContactNum,
      EmpJobEmail: req.body.JobEmail,
      EmpJobDescription: req.body.JobDescription,
      EmpJobPostedDate: req.body.JobPostedDate,
      EmpJobCreatedById: req.body.JobCreatedById
    },
    {
      where: { EmpJobID: empJobId }
    }
  ).then(rowsUpdated => {
    if (rowsUpdated > 0) {
      // If updated, return the success
      res.send(JSON.stringify({
        success: true
      }));
    }
    else {
      res.send('No rows were updated');
    }
  })
  .catch(next);
});
router.put('/stdjobpostsupdate/:id', function (req, res, next) {
  let stdJobId = parseInt(req.params.id);
  models.Std_JobPosts.update(
    {
      StdJobName: req.body.JobName,
      StdJobLocation: req.body.JobLocation,
      StdJobWebsite: req.body.JobWebsite,
      StdJobContactNum: req.body.JobContactNum,
      StdJobEmail: req.body.JobEmail,
      StdJobDescription: req.body.JobDescription,
      StdJobPostedDate: req.body.JobPostedDate,
      StdJobCreatedById: req.body.JobCreatedById
    },
    {
      where: { StdJobID: stdJobId }
    }
  ).then(rowsUpdated => {
    if (rowsUpdated > 0) {
      // If updated, return the success
      res.send(JSON.stringify({
        success: true
      }));
    }
    else {
      res.send('No rows were updated');
    }
  })
  .catch(next);
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
        EmpJobCreatedById: req.body.JobCreatedById
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.send(JSON.stringify(result));
      } else {
        res.send('This Job already exists!');
      }
    })
    .catch(function(err) {
      // print the error details
      console.log(err);
    });
});

/* Route for Employer Job Posts By EmpJobCreatedById */
router.get('/empjobpostsbycreated/:id', function (req, res) {
  let createdById = parseInt(req.params.id);
  models.Emp_JobPosts.findAll({
    where: {
      EmpJobCreatedById: createdById
    }
  }).then(empJobPost =>
    res.send(JSON.stringify(empJobPost)));
});

/* Student Routes */
router.get('/students', function (req, res, next) {
  var expand = req.query.expand;
  var findAll = {};
  if (expand == 'jobpoststotal') {
    findAll['include'] = [
      { model: models.Std_JobPosts, as: 'jobPosts' },
    ];
  }
  models.Std_Users.findAll(findAll).then(students => {
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

/* Route for Students by skill  */
router.get('/studentssearch/:skill', function (req, res) {
  models.Std_Users.findAll({
    where: {
      StdSkills: {
        [Op.like]: '%' + req.params.skill + '%'
      }
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
        Github: req.body.Github,
        Linkedin: req.body.Linkedin,
        Facebook: req.body.Facebook,
        Username: req.body.Username,
        Password: req.body.Password,
        avatar: req.body.avatar ? req.body.avatar : null
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
  models.Std_JobPosts.findAll({
    include: [
      { model: models.Std_Users, as: 'StudentID' }
    ]
  }).then(stuJobPosts => {
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
        res.send(result);
      } else {
        res.send('This job already exists!');
      }
    });
});

router.post('/login',
  function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.send({ success: false}); }
      
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        
        var type = req.body.userType;
        if (type == 'student') {
          return res.send({ success: true, id: user.StudentID });
        }
        else if (type == 'employer') {
          return res.send({ success: true, id: user.ID });
        }
        return res.send({ success: true });
      });
      
    })(req, res, next);
});

/* Route for Creating Student Job Posts */
router.post('/emppostjobcomments', (req, res) => {
  models.emppostjob_comment
    .findOrCreate({
      where: {
        comment: req.body.comment,
        emppostjobid: req.body.emppostjobid,
        parentComment: req.body.parentComment ? req.body.parentComment : null,
        emp_creator: req.body.emp_creator ? req.body.emp_creator : null,
        std_creator: req.body.std_creator ? req.body.std_creator : null
      }
    })
    .spread(function (result) {
      if (result) {
        res.send({success: true, result: result});
      } else {
        res.send({success: false});
      }
    });
});

/* Route for Student Job Posts by ID */
router.get('/emppostjobcomments/:id', function (req, res) {
  models.emppostjob_comment.findAll({
    where: {
      emppostjobid: req.params.id,
      parentComment: null
    },
    include: [
      { model: models.emppostjob_comment, as: 'child' },
    ]
  }).then(data =>
    res.send(JSON.stringify(data))
  );
});

module.exports = router;