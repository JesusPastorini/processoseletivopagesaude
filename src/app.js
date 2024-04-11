const express = require('express');
const { sequelize } = require('./models');
const { User } = require('./models');
const { userController, playerController } = require('./controller')

const app = express();

app.use(express.json());


app.get('/login', userController.login);
app.post('/cadastro', userController.registerUser);
app.post('/cadastroJogador', playerController.cadastroPlayer);

app.get('/teste', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

sequelize.sync().then(() => {
    console.log('---------Conectado com o banco de dados--------');
});

app.listen(3000, () => {
    console.log('App Online')
});