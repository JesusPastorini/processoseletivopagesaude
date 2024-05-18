import { api } from './baseURL';

const addPlayerTeam = async (playerId, nameTeam, position) => {
    try {
        const response = await api.put(`/team/${playerId}`, {
            nameTeam,
            position,
        });
    } catch (error) {
        console.error('erro na service:', error);
    }

};
export default addPlayerTeam;
const getAllTeamsWithPlayers = async () => {
    try {
        const response = await api.get('/home');
        return response.data.teamsWithPlayersFiltered;
    } catch (error) {
        console.error('Erro ao buscar times com jogadores:', error);
        return [];
    }
};

export { getAllTeamsWithPlayers };