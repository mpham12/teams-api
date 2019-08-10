'use strict';


module.exports = {

    
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('teams', [
        {championshiprings:2,abbreviation:'ARI',ballpark:'State Farm Stadium'},
        {championshiprings:2,abbreviation:'ATL',ballpark:'Mercedes-Benz Stadium'},
        {championshiprings:2,abbreviation:'BAL',ballpark:'M&T Bank Stadium'},
        {championshiprings:2,abbreviation:'BUF',ballpark:'New Era Field'},
        {championshiprings:2,abbreviation:'CAR',ballpark:'Bank of America Stadium'},
        {championshiprings:2,abbreviation:'CHI',ballpark:'Soldier FieldF'},

    ])
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('teams', null, {})
    
  }
};