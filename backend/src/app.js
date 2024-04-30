const express = require('express');
const cors = require('cors');
const { User, Player, Team, sequelize } = require('./models');
const { userController, playerController, teamController } = require('./controller')
const { checkRole } = require('./middleware/validationJWT')

const app = express();
app.use(cors());

app.use(express.json());


app.post('/', userController.login);
app.get('/home', checkRole(['user', 'admin']), teamController.teamPlayers);
app.put('/team/:playerId', checkRole(['user', 'admin']), teamController.createTeam);

app.post('/registration', checkRole(['admin']), userController.registerUser);
app.post('/cadastroJogador', checkRole(['user', 'admin']), playerController.cadastroPlayer);

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