'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matric_no: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      othername: {
        type: Sequelize.STRING,
        allowNull:false,
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
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('students'),
};