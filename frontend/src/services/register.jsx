import { api } from './baseURL';

const registerUser = async (username, email, password) => {
    try {
        const response = await api.post('/registration', {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao registrar usuário';
    }
};
const registerPlayer = async (namePlayer, note) => {
    try {
        const response = await api.post('/registrationPlayer', {
            namePlayer,
            note,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao registrar usuário';
    }
};
export {
    registerUser,
    registerPlayer,
};
