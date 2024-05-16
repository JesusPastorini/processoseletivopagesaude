// src/components/RegisterPlayer.jsx
import React, { useState } from 'react';
import { registerPlayer } from '../../services/register';
import '../styles/Register.css';

const RegisterPlayer = () => {
    const [namePlayer, setNamePlayer] = useState('');
    const [note, setNote] = useState('');
    const [playerErrors, setPlayerErrors] = useState({});
    const [playerSuccessMessage, setPlayerSuccessMessage] = useState('');

    const handleRegisterPlayer = async () => {
        if (!namePlayer || !note) {
            setPlayerErrors({ general: 'Todos os campos são obrigatórios' });
            return;
        }

        try {
            const player = await registerPlayer(namePlayer, note);
            setPlayerSuccessMessage(`Jogador ${player.namePlayer} cadastrado com sucesso!`);
            setPlayerErrors({});
            setNamePlayer('');
            setNote('');
        } catch (error) {
            setPlayerErrors({ general: error });
        }
    };

    return (
        <div className="register-form">
            <h2>Registrar Jogador</h2>
            <div>
                <label>
                    Nome do Jogador:
                    <input
                        type="text"
                        value={namePlayer}
                        onChange={(e) => setNamePlayer(e.target.value)}
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
            {playerErrors.general && <div className="error-message">{playerErrors.general}</div>}
            {playerSuccessMessage && <div className="success-message">{playerSuccessMessage}</div>}
            <button onClick={handleRegisterPlayer}>Registrar Jogador</button>
        </div>
    );
};

export default RegisterPlayer;
