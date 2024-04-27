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
    const { playerId } = req.params;
    const { nameTeam, position } = req.body;
    try {
        // Verifica se o time já existe, se não, cria um novo
        let team = await Team.findOne({ where: { nameTeam }, include: ['players'] });
        if (!team) {
            team = await Team.create({ nameTeam, average: 0 });
        }

        const player = await Player.findByPk(playerId);
        player.position = position;
        player.teamId = team.id;
        await player.save();

        // Recalcula a média do time após adicionar um jogador
        const totalNotes = team.players.reduce((acc, p) => acc + (p.note || 0), 0);
        const average = totalNotes / team.players.length;

        team.average = average;
        await team.save();

        res.json({ message: 'Jogador vinculado ao time com sucesso' });
    } catch (error) {
        console.error('Erro ao vincular jogador ao time:', error.message);
        res.status(500).json({ error: 'Erro ao atualizar jogador' });
    }
};

module.exports = {
    teamPlayers,
    createTeam
}