'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    StudentID:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    UserName:{
      type:DataTypes.STRING,
      unique:true
    },
    Email: {
      type:DataTypes.STRING,
      unique:true
    },
    Password: DataTypes.STRING,
    ConfirmPassword: DataTypes.STRING,
    ContactNum: DataTypes.STRING,
    CoursesCompletedAndCompleting: DataTypes.STRING,
    StudentPost: DataTypes.STRING,
    ResumeName: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  students.associate = function(models) {
    // associations can be defined here
  };
  return students;
};