const Sequelize = require('sequelize');
const allConfigs = require('../config/sequelize');
const teamsModel = require('./teams');

const config = allConfigs.development;

const connection = new Sequelize(config.database, config.username, config.password,{
    host: config.host,
    dialect: config.dialect
});
const Teams= teamsModel(connection,Sequelize);

module.exports= {
    Teams: Teams
    }