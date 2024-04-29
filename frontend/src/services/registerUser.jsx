import axios from 'axios';

// Alterei o nome da função para "registerUser" para refletir sua finalidade
const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post('http://localhost:3000/cadastroUser', {
            username,
            email,
            password,
        });
        return response.data; // Retorne os dados do usuário registrado para permitir uso no componente
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao registrar usuário';
    }
};

export default registerUser;
