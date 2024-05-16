// src/services/playerService.js
import axios from 'axios';

const getAllPlayers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/players');
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao buscar jogadores';
    }
};

const updatePlayer = async (playerId, playerData) => {
    try {
        const response = await axios.put(`http://localhost:3000/players/${playerId}`, playerData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao atualizar jogador';
    }
};

const deletePlayer = async (playerId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/players/${playerId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao deletar jogador';
    }
};

export { getAllPlayers, updatePlayer, deletePlayer };
