const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Team = sequelize.define('Team', {
    nameTeam: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    average: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: 'team'
});

module.exports = Team;
