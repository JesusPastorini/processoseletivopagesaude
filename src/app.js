const express = require('express');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());

sequelize.sync().then(() => {
    console.log('---------Conectado com o banco de dados--------');
});

app.listen(3000, () => {
    console.log('App Online')
});