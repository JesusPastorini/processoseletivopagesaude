import axios from 'axios';

const baseURL = 'http://localhost:3000';
const addPlayerTeam = async (playerId, nameTeam, position) => {
    try {
        const response = await axios.put(`${baseURL}/team/${playerId}`, {
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
        const response = await axios.get(`${baseURL}/home`);
        return response.data.teamsWithPlayersFiltered;
    } catch (error) {
        console.error('Erro ao buscar times com jogadores:', error);
        return [];
    }
};

export { getAllTeamsWithPlayers };