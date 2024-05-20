const express = require('express');
const cors = require('cors');
const { Player, sequelize } = require('./models');
const { userController, playerController, teamController, contactController } = require('./controller')
const { checkRole } = require('./middleware/validationJWT')

const app = express();
app.use(cors());

app.use(express.json());

app.post('/', userController.login);
app.get('/home', checkRole(['user', 'admin']), teamController.teamPlayers);
app.put('/team/:playerId', checkRole(['user', 'admin']), teamController.createTeam);

app.post('/registration', checkRole(['admin']), userController.registerUser);
app.post('/registrationPlayer', checkRole(['admin']), playerController.cadastroPlayer);

app.post('/contact', contactController.createContact);

app.put('/players/:playerId', checkRole(['admin']), playerController.updatePlayer);
app.delete('/players/:playerId', checkRole(['admin']), playerController.deletePlayer);

app.get('/players', checkRole(['user', 'admin']), async (req, res) => {
    const player = await Player.findAll()
    res.send(player)
})

app.post('/hello', (req, res) => {
    res.send('Hello, World!');
});

//sequelize.sync().then(() => {
//    console.log('---------Conectado com o banco de dados--------');
//});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App Online na porta ${PORT}`);
});;