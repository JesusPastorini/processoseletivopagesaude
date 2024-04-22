import axios from 'axios';

const baseURL = 'http://localhost:3001/TodosJogadores';

const getAllPlayers = async () => {
    try {
        const response = await axios.get(baseURL);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
        return [];
    }
};

export { getAllPlayers };