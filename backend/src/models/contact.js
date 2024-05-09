const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Contact = sequelize.define('Contact', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true, //createdAt e updatedAt automáticos
    tableName: 'contacts',
});

module.exports = Contact;
