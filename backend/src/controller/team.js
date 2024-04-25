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
    //const { playerId } = req.params;
    const { nameTeam, average } = req.body;
    //console.log(playerId);
    console.log(nameTeam);

    // Verifica se o time já existe, se não, cria um novo

    const team = await Team.create({ nameTeam, average }); // Cria um novo time


    // Verifica se o jogador existe
    //const player = await Player.findByPk(playerId);
    //if (!player) {
    //    return res.status(404).json({ error: 'Jogador não encontrado' });
    //}

    // Atribui o ID do time ao jogador e salva
    //player.teamId = team.id;
    //await player.save();

    res.json({ message: 'Jogador vinculado ao time com sucesso' });
};

module.exports = {
    teamPlayers,
    createTeam
}