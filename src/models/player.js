const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Team = require('./teams');

const Player = sequelize.define('Player', {
    namePlayer: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    note: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'player'
});

module.exports = Player;
