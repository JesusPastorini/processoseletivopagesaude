const { Player } = require('../models')

const cadastroPlayer = async (req, res) => {
    const { namePlayer, note } = req.body;

    if (!namePlayer) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const existingPlayer = await User.findOne({ where: { email } });
    if (existingPlayer) return res.status(409).json({ message: 'Player already registered' });

    await Player.create({ namePlayer, note });

    return res.status(201).json({ namePlayer });

}

module.exports = {
    cadastroPlayer,
};