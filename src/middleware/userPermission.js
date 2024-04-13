const User = require('../models')

const userPermission = async (req, res, next) => {
    const { role } = req.body

    const roleUser = await User.findOne({ where: { role: 'admin' } });
    if (!roleUser) return res.status(403).json({ message: 'Permissão negada.' });
    next();
}

module.exports = {
    userPermission
}