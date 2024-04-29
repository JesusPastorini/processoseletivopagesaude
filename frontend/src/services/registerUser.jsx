import axios from 'axios';

const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post('http://localhost:3000/registration', {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao registrar usuário';
    }
};

export default registerUser;
