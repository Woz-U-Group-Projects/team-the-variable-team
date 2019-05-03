'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define(
    'students',
    {
      StudentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: DataTypes.STRING
    },
    {
      lastName: DataTypes.STRING
    },
    {
      contact: DataTypes.STRING
    },
    {
      educationHistory: DataTypes.STRING
    },
    {
      links: DataTypes.STRING
    },
    {
      resumeName: DataTypes.STRING
    },
    {
      email: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return students;
};