'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employers', {
      
      CompanyID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      UserName: {
        type: Sequelize.STRING,
        unique:true
      },
      PassWord: {
        type: Sequelize.STRING
      },
      ConfirmPwd: {
        type: Sequelize.STRING
      },
      CompnanyNameCompanyAddress: {
        type: Sequelize.STRING
      },
      ContactNum: {
        type: Sequelize.STRING
      },
      CompanyWebsite: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employers');
  }
};