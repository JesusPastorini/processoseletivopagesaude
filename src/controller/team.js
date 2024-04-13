const { Team } = require('../models')

const teamPlayers = async () => {
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

const addTeam = async (req, res) => {

}

module.exports = {
    teamPlayers,
    addTeam
}