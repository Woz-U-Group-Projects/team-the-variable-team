'use strict';

module.exports = (sequelize, DataTypes) => {
  const emppostjob_comment = sequelize.define('emppostjob_comment', {
    comment: DataTypes.STRING,
    emppostjobid: DataTypes.INTEGER,
    parentComment: DataTypes.INTEGER,
    emp_creator: DataTypes.INTEGER,
    std_creator: DataTypes.INTEGER,
  }, {});
  emppostjob_comment.associate = function(models) {
    // associations can be defined here
    emppostjob_comment.belongsTo(models.emppostjob_comment, {
      foreignKey: 'parentComment',
      as: 'parent'
    });
    emppostjob_comment.belongsTo(models.Emp_Users, {
      foreignKey: 'emp_creator',
      as: 'empCreator'
    });
    emppostjob_comment.belongsTo(models.Std_Users, {
      foreignKey: 'std_creator',
      as: 'stdCreator'
    });
    emppostjob_comment.hasOne(models.emppostjob_comment, {
      foreignKey: 'parentComment',
      as: 'child'
    });
  };
  return emppostjob_comment;
};

