var express =require("express");
var router = express.Router();
const sqlite = require("sqlite3").verbose();
var models = require("../models");

/*GET home page. */
router.get("/student", function(req, res, next) {
    res.send('students')
    models.Students.findAll().then(students => res.json(students));
});

router.post("/", function(req,res, next) {
    console/log(req.body);
    let newStudents = new models.Students();
    newStudents.name = req.body.name;
    newStudents.save().then(Student => res.json(students));
});

module.exports = router;