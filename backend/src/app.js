const express = require('express');
const { User, Player, Team, sequelize } = require('./models');
const { userController, playerController, teamController } = require('./controller')
const { userPermission } = require('./middleware/userPermission')

const app = express();

app.use(express.json());


app.get('/login', userController.login);
app.get('/home', teamController.teamPlayers);
app.put('/home/team', teamController.createTeam);

app.post('/cadastroUser', userPermission, userController.registerUser);
app.post('/cadastroJogador', playerController.cadastroPlayer);

app.get('/TodosUsuarios', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})
app.get('/TodosTimes', async (req, res) => {
    const teams = await Team.findAll()
    res.send(teams)
})
app.get('/TodosJogadores', async (req, res) => {
    const player = await Player.findAll()
    res.send(player)
})

sequelize.sync().then(() => {
    console.log('---------Conectado com o banco de dados--------');
});

app.listen(3000, () => {
    console.log('App Online')
});