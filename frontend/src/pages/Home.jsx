import React, { useState, useEffect } from 'react';
import PlayerInput from '../components/teams/PlayerInput';
import TeamSelect from '../components/teams/TeamSelect';
import PositionSelect from '../components/teams/PositionSelect';

function App() {
    const [playerName, setPlayerName] = useState('');
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
            <PlayerInput options={playerName} onChange={(value) => console.log(value)} />
            <TeamSelect onChange={setSelectedTeam} />
            <PositionSelect onChange={setSelectedPosition} />
            <button onClick={handleAddToTeam}>OK</button>
        </div>
    );
}

export default App;