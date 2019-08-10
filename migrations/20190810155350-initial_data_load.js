'use strict';


module.exports = {

    
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('teams', [
        {totalgames:2,championshiprings:'2',abbreviation:'ARI',ballpark:'State Farm Stadium'},
        {totalgames:2,championshiprings:'2',abbreviation:'ATL',ballpark:'Mercedes-Benz Stadium'},
        {totalgames:2,championshiprings:'2',abbreviation:'BAL',ballpark:'M&T Bank Stadium'},
        {totalgames:2,championshiprings:'2',abbreviation:'BUF',ballpark:'New Era Field'},
        {totalgames:2,championshiprings:'2',abbreviation:'CAR',ballpark:'Bank of America Stadium'},
        {totalgames:2,championshiprings:'2',abbreviation:'CHI',ballpark:'Soldier FieldF'},

    ])
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('teams', null, {})
    
  }
};