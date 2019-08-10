'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('teams');

      await queryInterface.createTable('teams', {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          location: {
              type: Sequelize.STRING,
          },
          mascot: {
              type: Sequelize.STRING,
          },
          ballpark: {
              type: Sequelize.STRING,
          },
          abbreviation: {
              type: Sequelize.STRING,
          },
          conference: {
              type: Sequelize.STRING,
          },
          division: {
              type: Sequelize.STRING,
          },
          createdAt: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
          },
          deletedAt: {
              type: Sequelize.DATE
          },
      })
  },

  down: async (queryInterface, Sequelize) => {

      return queryInterface.dropTable('teams')
  }
};