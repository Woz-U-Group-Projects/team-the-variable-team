const passport = require('passport');
const LocalStrategy = require('passport-local');
const models = require('../models');

passport.serializeUser(function(user, done) {
  if (!user.StudentID) {
    done(null, user.StudentID + 'student');
  }
  else {
    done(null, user.ID + 'employer');
  }
});

passport.deserializeUser(function(id, done) {
  models.Emp_Users.findOne({where: {ID: id}}).then(employer => {
    if (!employer || !employer.ID) {
      models.Std_Users.findOne({where: {ID: id}}).then(student => {
        if (!student || !student.StudentID) {
          return done(null, false, { success: false });
        }
        return done(null, student);
      });
    }
    return done(null, employer);
  });
});

passport.use(new LocalStrategy({passReqToCallback: true},
  function(req, username, password, done) {
    var type = req.body.userType;
    if (type == 'employer') {
      models.Emp_Users.findOne({where: {Username: username}}).then(employer => {
        if (!employer || !employer.validPassword(password)) {
          return done(null, false, { success: false });
        }
        return done(null, employer);
      });
    }
    else if (type == 'student') {
      models.Std_Users.findOne({where: {Username: username}}).then(student => {
        if (!student || !student.validPassword(password)) {
          return done(null, false, { success: false });
        }
        return done(null, student);
      });
    }
  }
));
