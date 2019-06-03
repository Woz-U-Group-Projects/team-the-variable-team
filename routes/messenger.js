var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* Create Message */
router.post('/createmessage', (req, res) => {
  models.Messages.create({
    Message: req.body.Message,
    EmployerCreatorID: req.body.EmployerCreatorID,
    EmployerRecipientID: req.body.EmployerRecipientID,
    StudentCreatorID: req.body.StudentCreatorID,
    StudentRecipientID: req.body.StudentRecipientID,
    ParentMessage: req.body.ParentMessage,
    Read: 0,
    Created: new Date()
  }, {fields:[
    'Message',
    'EmployerCreatorID',
    'EmployerRecipientID',
    'StudentCreatorID',
    'StudentRecipientID',
    'ParentMessage',
    'Read',
    'Created'
  ]})
  .then(function (result) {
    if (result) {
      return res.send(JSON.stringify({success: true, result: result}));
    } 
    else {
      return res.send(JSON.stringify({success: false}));
    }
  });
});

/* Retrieve Messages by recipient id */
router.get('/retrieve', function (req, res, next) {
  var condition = {};
  if (req.query.EmployerRecipientID) {
    condition.EmployerRecipientID = req.query.EmployerRecipientID;
  }
  if (req.query.StudentRecipientID) {
    condition.StudentRecipientID = req.query.StudentRecipientID;
  }
  if (req.query.ParentMessage) {
    condition.ParentMessage = req.query.ParentMessage;
  }
  if (req.query.ID) {
    condition.ID = req.query.ID;
  }
  
  var order = [['ID', 'ASC']];
  if (req.query.sort) {
    order[0][0] = req.query.sort;
  }
  if (req.query.order) {
    order[0][1] = req.query.order;
  }

  models.Messages.findAll({
    order: order,
    where: condition,
    include: [
      { model: models.Emp_Users, as: 'EmpCreator' },
      { model: models.Emp_Users, as: 'EmpRecipient' },
      { model: models.Std_Users, as: 'StdCreator' },
      { model: models.Std_Users, as: 'StdRecipient' }
    ]
  }).then(employers => {
    res.send(JSON.stringify(employers));
  });
});

/* Route for Employer Job Posts Update */
router.put('/update/:id', function (req, res, next) {
  let ID = parseInt(req.params.id);
  models.Messages.update(
    req.body,
    {where: { ID: ID }}
  ).then(rowsUpdated => {
    if (rowsUpdated > 0) {
      // If updated, return the success
      res.send(JSON.stringify({
        success: true
      }));
    }
    else {
      res.send({success: false});
    }
  })
  .catch(next);
});

module.exports = router;

