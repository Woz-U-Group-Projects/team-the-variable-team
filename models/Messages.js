'use strict';

module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    ID: DataTypes.INTEGER,
    Message: DataTypes.STRING,
    EmployerCreatorID: DataTypes.INTEGER,
    StudentCreatorID: DataTypes.INTEGER,
    EmployerRecipientID: DataTypes.INTEGER,
    StudentRecipientID: DataTypes.INTEGER,
    ParentMessage: DataTypes.INTEGER,
    Created: DataTypes.DATE,
    Read: DataTypes.INTEGER
  },
    {
      timestamps: false
    });
  Messages.associate = function (models) {
    // associations can be defined here
    Messages.belongsTo(models.Emp_Users, {
      foreignKey: 'EmployerCreatorID',
      as: 'EmpCreator'
    });
    Messages.belongsTo(models.Emp_Users, {
      foreignKey: 'EmployerRecipientID',
      as: 'EmpRecipient'
    });
    Messages.belongsTo(models.Std_Users, {
      foreignKey: 'StudentCreatorID',
      as: 'StdCreator'
    });
    Messages.belongsTo(models.Std_Users, {
      foreignKey: 'StudentRecipientID',
      as: 'StdRecipient'
    });
  };
  return Messages;
};

