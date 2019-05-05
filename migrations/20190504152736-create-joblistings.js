'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('joblistings', {
     
      CompanyID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CompanyAddress: {
        type: Sequelize.STRING
      },
      Website: {
        type: Sequelize.STRING
      },
      AmountHiresPerYear: {
        type: Sequelize.INTEGER
      },
      ContactNum: {
        type: Sequelize.STRING
      },
      Email: {
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
    return queryInterface.dropTable('joblistings');
  }
};