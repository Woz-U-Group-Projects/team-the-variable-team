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
        await queryInterface.addColumn('emppostjob_comments', 'emp_creator', Sequelize.STRING, {
          allowNull: true
        }),
        await queryInterface.addColumn('emppostjob_comments', 'std_creator', Sequelize.STRING, {
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
        await queryInterface.removeColumn('emppostjob_comments', 'emp_creator'),
        await queryInterface.removeColumn('emppostjob_comments', 'std_creator')
      ];
    } 
    catch (e) {
      return Promise.reject(e);
    }
  }
};
