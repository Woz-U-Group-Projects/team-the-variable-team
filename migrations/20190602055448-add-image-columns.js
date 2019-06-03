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
        await queryInterface.addColumn('Emp_Users', 'avatar', Sequelize.STRING, {
          allowNull: true
        }),
        await queryInterface.addColumn('Std_Users', 'avatar', Sequelize.STRING, {
          allowNull: true
        })
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
        await queryInterface.removeColumn('Emp_Users', 'avatar'),
        await queryInterface.removeColumn('Std_Users', 'avatar')
      ];
    } 
    catch (e) {
      return Promise.reject(e);
    }
  }
};
