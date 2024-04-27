import React, { useState, useEffect } from 'react';
import PlayerInput from '../components/teams/PlayerInput';
import TeamSelect from '../components/teams/TeamSelect';
import PositionSelect from '../components/teams/PositionSelect';
import { getAllPlayers } from '../services/ListPlayerService';
import addPlayerTeam from '../services/teamService';

function App() {
    const [playerName, setPlayerName] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            const playersData = await getAllPlayers();
            setPlayerName(playersData);
        }
        fetchPlayers();
    }, []);

    const handleAddToTeam = () => {
        addPlayerTeam(selectedPlayerId, selectedTeam, selectedPosition);
    };

    return (
        <div>
            <PlayerInput options={playerName} onChange={(selectedPlayerId) => {
                setSelectedPlayerId(selectedPlayerId)
            }} />
            <TeamSelect onChange={(selectedTeam) => {
                setSelectedTeam(selectedTeam)
            }} />
            <PositionSelect onChange={(selectedPosition) => {
                setSelectedPosition(selectedPosition)
            }} />
            <button onClick={handleAddToTeam}>OK</button>
        </div>
    );
}

export default App;