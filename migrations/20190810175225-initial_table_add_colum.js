'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('teams', 'championshiprings',{type:Sequelize.INTEGER ,allowNull:false})
  },


  down:(queryInterface, Sequelize) => {
   await queryInterface.removeColumn('teams', 'championshiprings')
  }

}