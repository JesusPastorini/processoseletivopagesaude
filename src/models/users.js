const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'user'
});

// Função para pré-popular a tabela user--uso apenas para teste
async function prepopulateUserTable() {
    try {
        // Verifica se a tabela está vazia
        const count = await User.count();
        if (count === 0) {
            await User.bulkCreate([
                { username: 'user1', email: 'user1@example.com', password: 'password1' },
                { username: 'user2', email: 'user2@example.com', password: 'password2' },
            ]);
            console.log('Tabela user pré-populada com sucesso.');
        } else {
            console.log('A tabela user já contém registros.');
        }
    } catch (error) {
        console.error('Erro ao pré-popular a tabela user:', error);
    }
}

prepopulateUserTable();

module.exports = User;
