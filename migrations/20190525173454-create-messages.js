'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Message: {
        allowNull: false,
        type: Sequelize.STRING
      },
      CreatorID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CreatorType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      RecipientID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      RecipientType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Created: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};
