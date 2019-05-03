'use strict';
module.exports = (sequelize, DataTypes) => {
  const employers = sequelize.define(
    'employers',
    {
      EmployerId: {
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
      companyContactNumber: DataTypes.STRING
    },
    {
      companyAddress: DataTypes.STRING
    },
    {
      companyWebsite: DataTypes.STRING
    },
    {
      companyName: DataTypes.STRING
    },
    {
      email: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return employers;
};