'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define(
    'login',
    {
      UsernameId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: DataTypes.STRING
    },
    {
      password: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return login;
};