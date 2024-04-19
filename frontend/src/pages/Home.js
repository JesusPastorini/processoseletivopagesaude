import React, { useState } from 'react';
import PlayerInput from './PlayerInput';
import TeamSelect from './TeamSelect';
import PositionSelect from './PositionSelect';

function App() {
    const [playerName, setPlayerName] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');

    const handleAddToTeam = () => {
        // adicionar ao time
    };

    return (
        <div>
            <PlayerInput onChange={setPlayerName} />
            <TeamSelect onChange={setSelectedTeam} />
            <PositionSelect onChange={setSelectedPosition} />
            <button onClick={handleAddToTeam}>OK</button>
        </div>
    );
}

export default App;