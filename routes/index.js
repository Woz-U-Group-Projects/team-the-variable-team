var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
<<<<<<< HEAD
const models = require('../models');
const Sequelize = require('sequelize');

=======
var models = require('../models');
>>>>>>> test
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', function(req, res, next) {
  models.students.findAll({}).then(studentsFound => {
    res.render('students', {
      students: studentsFound
    });
  });
});

module.exports = router;
