const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Team = sequelize.define('Team', {
    nameTeam: {
        type: DataTypes.ENUM('Santos', 'Internacional', 'Gremio', 'Flamengo'),
        allowNull: false,
        unique: true
    },
    average: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'team'
});

module.exports = Team;
