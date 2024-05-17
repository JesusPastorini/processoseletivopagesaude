const { Contact } = require('../models');

const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        const newContact = await Contact.create({ name, email, message });
        return res.status(201).json(newContact);
    } catch (error) {
        console.error('Erro ao criar contato:', error);
        return res.status(500).json({ message: 'Erro interno ao criar contato.' });
    }
};

module.exports = {
    createContact,
};
