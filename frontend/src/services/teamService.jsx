import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const getAllPlayers = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
        return [];
    }
};

export { getAllPlayers };