'use strict';
module.exports = (sequelize, DataTypes) => {
  const joblistings = sequelize.define('joblistings', {
    CompanyID:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type:DataTypes.INTEGER
    },
    CompanyAddress: DataTypes.STRING,
    Website: DataTypes.STRING,
    AmountHiresPerYear: DataTypes.INTEGER,
    ContactNum: DataTypes.STRING,
    Email: {
      type:DataTypes.STRING,
      unique: true
    }
  }, {});
  joblistings.associate = function(models) {
    // associations can be defined here

    joblistings.associate = function(models) {
      joblistings.belongsTo(models.employers, {
        foreignKey: 'CompanyID'
      });
    }
  };
  return joblistings;
};