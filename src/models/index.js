const sequelize = require('../config/sequelize');

const Team = require('./teams');
const Player = require('./player');
const User = require('./users');

Team.hasMany(Player, { as: 'players' });

const db = {
    Team,
    Player,
    User,
    sequelize
};

module.exports = db;
