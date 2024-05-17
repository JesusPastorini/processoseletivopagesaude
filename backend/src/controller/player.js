const { Player } = require('../models')

const cadastroPlayer = async (req, res) => {
    const { namePlayer, note } = req.body;

    if (!namePlayer) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const existingPlayer = await Player.findOne({ where: { namePlayer } });
    if (existingPlayer) return res.status(409).json({ message: 'Player already registered' });

    await Player.create({ namePlayer, note });

    return res.status(201).json({ namePlayer });

}

const updatePlayer = async (req, res) => {
    const { playerId } = req.params;
    const { namePlayer, note } = req.body;

    try {
        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }

        player.namePlayer = namePlayer;
        player.note = note;
        await player.save();

        return res.status(200).json(player);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating player', error: error.message });
    }
};

const deletePlayer = async (req, res) => {
    const { playerId } = req.params;

    try {
        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }

        await player.destroy();
        return res.status(200).json({ message: 'Player deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting player', error: error.message });
    }
};

module.exports = {
    cadastroPlayer,
    updatePlayer,
    deletePlayer,
};