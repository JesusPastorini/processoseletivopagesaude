import axios from 'axios';

const addPlayerTeam = async (playerId, nameTeam, position) => {
    console.log(playerId)
    console.log(nameTeam)
    try {
        const response = await axios.put(`http://localhost:3000/team/${playerId}`, {
            nameTeam,
            position,
        });
    } catch (error) {
        console.error('erro na service:', error);
    }

};

export default addPlayerTeam;