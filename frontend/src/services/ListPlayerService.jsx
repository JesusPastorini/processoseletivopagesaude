import { api } from './baseURL';

const getAllPlayers = async () => {
    try {
        const response = await api.get('/players');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao buscar jogadores';
    }
};

const updatePlayer = async (playerId, playerData) => {
    try {
        const response = await api.put(`/players/${playerId}`, playerData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao atualizar jogador';
    }
};

const deletePlayer = async (playerId) => {
    try {
        const response = await api.delete(`/players/${playerId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data.message : 'Erro ao deletar jogador';
    }
};

export { getAllPlayers, updatePlayer, deletePlayer };
