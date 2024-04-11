const { User } = require('../models')

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const getByUser = await User.findOne({ where: { email, password } });
    if (!getByUser) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).send('Usuario Logado');
};

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long'
        });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ message: 'User already registered' });

    await User.create({ username, email, password });

    return res.status(201).json({ username });
}

module.exports = {
    login,
    registerUser,
};