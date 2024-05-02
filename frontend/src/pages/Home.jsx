import React, { useState, useEffect } from 'react';
import PlayerInput from '../components/teams/PlayerInput';
import TeamSelect from '../components/teams/TeamSelect';
import PositionSelect from '../components/teams/PositionSelect';
import { getAllPlayers } from '../services/ListPlayerService';
import addPlayerTeam from '../services/teamService';
import { getAllTeamsWithPlayers } from '../services/teamService';

function App() {
    const [teams, setTeams] = useState([]);
    const [playerName, setPlayerName] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            const playersData = await getAllPlayers();
            const teamsData = await getAllTeamsWithPlayers();
            setPlayerName(playersData);
            setTeams(teamsData);
        }
        fetchPlayers();
    }, []);

    const handleAddToTeam = async () => {
        await addPlayerTeam(selectedPlayerId, selectedTeam, selectedPosition);
        const teamsData = await getAllTeamsWithPlayers();
        setTeams(teamsData); // Atualiza a lista de times
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
            {/* Exibe a lista de times com suas notas e jogadores */}
            <h2>Times e Jogadores</h2>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>
                        <h3>{team.nameTeam} - Nota: {team.average}</h3>
                        <ul>
                            {team.players.map((player) => (
                                <li key={player.id}>
                                    {player.namePlayer} - {player.position || 'Sem posição'}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;