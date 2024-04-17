const { Team, Player } = require('../models')

const teamPlayers = async (req, res) => {
    try {
        // Consulta os times com os jogadores associados
        const teamsWithPlayers = await Team.findAll({
            include: ['players'] // Inclui os jogadores associados a cada time
        });

        // Filtra os times que têm pelo menos um jogador associado
        const teamsWithPlayersFiltered = teamsWithPlayers.filter(team => team.players.length > 0);

        return res.status(200).json({ teamsWithPlayersFiltered });
    } catch (error) {
        console.error('Erro ao buscar os times com jogadores:', error);
        throw new Error('Erro ao buscar os times com jogadores.');
    }
}

const createTeam = async (req, res) => {
    const teamsData = req.body; // Recebe a lista de times com seus jogadores

    try {
        // Adiciona cada jogador aos times fixos
        const createdPlayers = await Promise.all(teamsData.flatMap(async (teamData) => {
            const { teamName, players } = teamData;

            // Adiciona cada jogador ao time
            return Promise.all(players.map(async (playerName) => {
                // Cria um novo jogador associado ao time
                const player = await Player.create({ namePlayer: playerName, teamName: teamName });
                return player;
            }));
        }));

        res.json(createdPlayers);
    } catch (error) {
        console.error('Erro ao adicionar times:', error);
    }
}

module.exports = {
    teamPlayers,
    createTeam
}