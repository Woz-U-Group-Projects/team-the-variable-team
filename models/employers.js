'use strict';
module.exports = (sequelize, DataTypes) => {
  const employers = sequelize.define('employers', {
    CompanyID: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    UserName: DataTypes.STRING,
    ContactNum: DataTypes.STRING,
    CompnanyNameCompanyAddress: DataTypes.STRING,
    CompanyWebsite: DataTypes.STRING
  }, {});
  employers.associate = function(models) {
    employers.hasMany(models.joblistings,{
      foreignKey: 'CompanyID'
    });
  };
  return employers;
};