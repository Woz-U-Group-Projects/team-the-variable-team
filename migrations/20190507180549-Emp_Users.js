'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Emp_Users', 'CompIndustry', Sequelize.STRING, {
        allowNull: true
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Emp_Users', 'CompIndustry');
  }
};
