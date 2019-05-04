'use strict';
module.exports = (sequelize, DataTypes) => {
  const employers = sequelize.define(
    'employers', {
    CompanyID:{
    allowNull: false,
    autoIncrement: true,
     primaryKey: true,
    Data:Types.INTEGER
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    UserName:{
      type:DataTypes.STRING,
      unique: true},

    PassWord: DataTypes.STRING,

    ContactNumber: DataTypes.STRING,
    CompanyAddress: DataTypes.STRING,
    CompanyName: DataTypes.STRING,
    CompanyWebsite: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  employers.associate = function(models) {
    // associations can be defined here

    //Associated with joblisting here but 
//I need to associate in the joblistings with code as follows bellow

/* joblistings.associate = function(models) {
  joblistings.belongsTo(models.employers, {
    foreignKey: CompanyID'
  });
};*/
    employers.hasMany(models.joblistings,{
      foreignKey: 'CompanyID'
    });
  };
  return employers;
};