const sequelize = require('../config/sequelize');

const Team = require('./teams');
const Player = require('./player');
const User = require('./users');
const Contact = require('./contact');

Team.hasMany(Player, { as: 'players', foreignKey: 'teamId' });

const db = {
    Team,
    Player,
    User,
    Contact,
    sequelize
};

module.exports = db;
