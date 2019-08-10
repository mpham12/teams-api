const Teams = (connection, Sequelize) => {
  return connection.define('teams', {
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
      abbreviation: {
          type: Sequelize.STRING,
          unique: true
      },
      conference: {
          type: Sequelize.ENUM('AFC', 'NFC'),
      },
      division: {
          type: Sequelize.ENUM('East', 'South', 'West', 'North'),
      },
  })
}
module.exports = Teams;