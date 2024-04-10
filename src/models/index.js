const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Team = require('./teams');
const Player = require('./player');
const User = require('./users');

Player.belongsTo(Team, { foreignKey: 'teamId' });

const db = {
    Team,
    Player,
    User,
    sequelize
};

module.exports = db;
