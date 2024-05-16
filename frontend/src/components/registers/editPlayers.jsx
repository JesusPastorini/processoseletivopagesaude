// src/components/registers/EditPlayer.jsx
import React, { useState, useEffect } from 'react';
import { getAllPlayers, updatePlayer, deletePlayer } from '../../services/ListPlayerService';
import '../styles/EditPlayer.css';
import { TbPlayFootball } from "react-icons/tb";

const EditPlayer = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [namePlayer, setName] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        const fetchPlayers = async () => {
            const playersData = await getAllPlayers();
            setPlayers(playersData);
        };

        fetchPlayers();
    }, []);

    const handleSelectPlayer = (player) => {
        setSelectedPlayer(player);
        setName(player.namePlayer);
        setNote(player.note);
    };

    const handleUpdatePlayer = async () => {
        if (selectedPlayer) {
            await updatePlayer(selectedPlayer.id, { namePlayer, note });
            const playersData = await getAllPlayers();
            setPlayers(playersData);
            setSelectedPlayer(null);
            setName('');
            setNote('');
        }
    };

    const handleDeletePlayer = async (playerId) => {
        await deletePlayer(playerId);
        const playersData = await getAllPlayers();
        setPlayers(playersData);
        setSelectedPlayer(null);
        setName('');
        setNote('');
    };

    return (
        <div className="edit-player-container">
            <h2>Editar Jogador</h2>
            <div className="player-list">
                {players.map((player) => (
                    <div key={player.id} onClick={() => handleSelectPlayer(player)}>
                        <TbPlayFootball className="icone-players" />
                        {player.namePlayer} Nota: {player.note}
                    </div>
                ))}
            </div>
            {selectedPlayer && (
                <div className="edit-form">
                    <div>
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={namePlayer}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Nota:
                            <input
                                type="text"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </label>
                    </div>
                    <button onClick={handleUpdatePlayer}>Atualizar</button>
                    <button onClick={() => handleDeletePlayer(selectedPlayer.id)}>Deletar</button>
                </div>
            )}
        </div>
    );
};

export default EditPlayer;
