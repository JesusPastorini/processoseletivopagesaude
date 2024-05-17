const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Player = sequelize.define('Player', {
    namePlayer: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    note: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tableName: 'player'
});

module.exports = Player;
