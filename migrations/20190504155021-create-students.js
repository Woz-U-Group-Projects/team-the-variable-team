'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      
      StudentID: {
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
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING,
        
      },
      ConfirmPassword: {
        type: Sequelize.STRING
      },
      ContactNum: {
        type: Sequelize.STRING
      },
      CoursesCompletedAndCompleting: {
        type: Sequelize.STRING
      },
      StudentPost: {
        type: Sequelize.STRING
      },
      ResumeName: {
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
    return queryInterface.dropTable('students');
  }
};