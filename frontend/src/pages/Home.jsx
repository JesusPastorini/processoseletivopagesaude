import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerInput from '../components/teams/PlayerInput';
import TeamSelect from '../components/teams/TeamSelect';
import PositionSelect from '../components/teams/PositionSelect';
import { getAllPlayers } from '../services/ListPlayerService';
import addPlayerTeam from '../services/teamService';
import { getAllTeamsWithPlayers } from '../services/teamService';
import '../components/auth/PrivateRoute'; // HTTP para validação do token
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Field from '../components/teams/Field';
import '../components/styles/Home.css';

function App() {
    const [teams, setTeams] = useState([]);
    const [playerName, setPlayerName] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlayersAndTeams = async () => {
            const token = sessionStorage.getItem('authToken'); // Verifica se o usuário está autenticado
            if (!token) {
                navigate('/');
            } else {
                const playersData = await getAllPlayers();
                const teamsData = await getAllTeamsWithPlayers();
                setPlayerName(playersData);
                setTeams(teamsData);
            }
        };

        fetchPlayersAndTeams();
    }, [navigate]);

    const handleAddToTeam = async () => {
        await addPlayerTeam(selectedPlayerId, selectedTeam, selectedPosition);
        const teamsData = await getAllTeamsWithPlayers();
        setTeams(teamsData); // Atualiza a lista de times
        setSelectedPlayerId('');
        setSelectedTeam('');
        setSelectedPosition('');
    };

    return (
        <div>
            <Navbar />
            <div className="player-input">
                <PlayerInput
                    options={playerName}
                    onChange={setSelectedPlayerId}
                    value={selectedPlayerId}
                />
                <TeamSelect
                    onChange={setSelectedTeam}
                    value={selectedTeam}
                />
                <PositionSelect
                    onChange={setSelectedPosition}
                    value={selectedPosition}
                />
                <button className="btn-home" onClick={handleAddToTeam}>Escalado</button>
            </div>
            <Field teams={teams} />
            <Footer />
        </div>
    );
}

export default App;