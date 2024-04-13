const express = require('express');
const { sequelize } = require('./models');
const { User, Player } = require('./models');
const { userController, playerController, teamController } = require('./controller')
const { userPermission } = require('./middleware/userPermission')

const app = express();

app.use(express.json());


app.get('/login', userController.login);
app.get('/home', teamController.teamPlayers)

app.post('/cadastro', userPermission, userController.registerUser);
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