var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const Sequelize = require('sequelize');

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
