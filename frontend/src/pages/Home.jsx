import React, { useState, useEffect } from 'react';
import PlayerInput from '../components/teams/PlayerInput';
import TeamSelect from '../components/teams/TeamSelect';
import PositionSelect from '../components/teams/PositionSelect';
import { getAllPlayers } from '../services/ListPlayerService';

function App() {
    const [playerName, setPlayerName] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');

    useEffect(() => {
        const fetchPlayers = async () => {
            const playersData = await getAllPlayers();
            setPlayerName(playersData);
        }
        fetchPlayers();
    }, []);

    const handleAddToTeam = () => {
        return console.log('ok')
    };

    return (
        <div>
            <PlayerInput options={playerName} onChange={value => value} />
            <TeamSelect options={selectedTeam} onChange={value => value} />
            <PositionSelect onChange={setSelectedPosition} />
            <button onClick={handleAddToTeam}>OK</button>
        </div>
    );
}

export default App;