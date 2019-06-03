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
        await queryInterface.addColumn('Std_Users', 'Github', Sequelize.STRING, {
          allowNull: true
        }),
        await queryInterface.addColumn('Std_Users', 'Linkedin', Sequelize.STRING, {
          allowNull: true
        }),
        await queryInterface.addColumn('Std_Users', 'Facebook', Sequelize.STRING, {
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
        await queryInterface.removeColumn('Std_Users', 'Github'),
        await queryInterface.removeColumn('Std_Users', 'Linkedin'),
        await queryInterface.removeColumn('Std_Users', 'Facebook')
      ];
    } 
    catch (e) {
      return Promise.reject(e);
    }
  }
};
