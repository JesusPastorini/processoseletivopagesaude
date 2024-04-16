import axios from 'axios';

const baseURL = 'http://localhost:3001/TodosJogadores';

const getAllPlayers = async () => {
    const response = await axios.get(baseURL);
    return response.data;
};

export { getAllPlayers };