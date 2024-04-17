const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Team = sequelize.define('Team', {
    nameTeam: {
        type: DataTypes.ENUM('TimeA', 'TimeB', 'TimeC', 'TimeD'),
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
