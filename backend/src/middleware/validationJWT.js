const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET_TOKEN;

const checkRole = (allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'Autorização necessária' });
        }

        const tokenParts = authHeader.split(' ');
        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            return res.status(400).json({ message: 'Formato de token inválido' });
        }

        const token = tokenParts[1];
        try {
            const decoded = jwt.verify(token, secret);

            if (!allowedRoles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Acesso negado' });
            }

            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Token inválido' });
        }
    };
};

module.exports = {
    checkRole,
};
