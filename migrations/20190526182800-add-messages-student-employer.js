'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    try {
      return [
        await queryInterface.addColumn(
          'Messages',
          'EmployerCreatorID',
          {type: Sequelize.INTEGER}
        ),
        await queryInterface.addColumn(
          'Messages',
          'StudentCreatorID',
          {type: Sequelize.INTEGER}
        ),
        await queryInterface.addColumn(
          'Messages',
          'EmployerRecipientID',
          {type: Sequelize.INTEGER}
        ),
        await queryInterface.addColumn(
          'Messages',
          'StudentRecipientID',
          {type: Sequelize.INTEGER}
        ),
        // Remove columns
        await queryInterface.removeColumn(
          'Messages',
          'CreatorID'
        ),
        await queryInterface.removeColumn(
          'Messages',
          'CreatorType'
        ),
        await queryInterface.removeColumn(
          'Messages',
          'RecipientID'
        ),
        await queryInterface.removeColumn(
          'Messages',
          'RecipientType'
        )
      ];
    } 
    catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    try {
      return [
        await queryInterface.removeColumn(
          'Messages',
          'EmployerCreatorID'
        ),
        await queryInterface.removeColumn(
          'Messages',
          'StudentCreatorID'
        ),
        await queryInterface.removeColumn(
          'Messages',
          'EmployerRecipientID'
        ),
        await queryInterface.removeColumn(
          'Messages',
          'StudentRecipientID'
        ),
        // Remove columns,
        await queryInterface.addColumn(
          'Messages',
          'CreatorID',
          {type: Sequelize.INTEGER}
        ),
        await queryInterface.addColumn(
          'Messages',
          'CreatorType',
          {type: Sequelize.STRING}
        ),
        await queryInterface.addColumn(
          'Messages',
          'RecipientID',
          {type: Sequelize.INTEGER}
        ),
        await queryInterface.addColumn(
          'Messages',
          'RecipientType',
          {type: Sequelize.STRING}
        )
      ];
    } 
    catch (e) {
      return Promise.reject(e);
    }
  }
};
